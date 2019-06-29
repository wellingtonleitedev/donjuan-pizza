import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import Header from '../../components/Header';
import api from '../../services/api';

class FinishOrder extends Component {
  state = {
    note: '',
    cep: '',
    street: '',
    number: '',
    neighborhood: '',
    error: '',
  };

  componentDidMount() {
    console.tron.log(this.props.orderProducts);
  }

  setOrder = async () => {
    const {
      note, cep, street, number, neighborhood,
    } = this.state;

    const {
      orderProducts: { data },
      navigation,
      navigation: { navigate },
    } = this.props;

    const overall = navigation.getParam('overall');

    if (!cep || !street || !number || !neighborhood) {
      this.setState({
        error: 'Você precisa colocar o seu endereço para entrega!',
      });
      return;
    }

    try {
      this.setState({
        note: '',
        cep: '',
        street: '',
        number: '',
        neighborhood: '',
        error: '',
      });

      const order = await api.post('order', {
        note,
        cep,
        street,
        number,
        neighborhood,
        overall,
      });

      data.map(async (product) => {
        await api.post('order-products', {
          order_id: order.data.id,
          type_id: product.type_id,
          taste_id: product.id,
          size_id: product.sizes[0].id,
        });
      });

      navigate('MyOrders');
    } catch (err) {
      this.setState({
        error: 'Houve algum problema com seu pedido, verifique seu endereço ou tente novamente!',
      });
    }
  };

  render() {
    const {
      note, cep, street, number, neighborhood, error,
    } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Header
          control={(
            <View style={styles.controls}>
              <View style={styles.headerTitle}>
                <Icon
                  onPress={() => navigation.pop()}
                  style={styles.icon}
                  name="chevron-left"
                  size={24}
                  color="#fff"
                />
                <Text style={styles.text}>Realizar pedido</Text>
              </View>
              <Text style={styles.priceTotal}>R$ 107,00</Text>
            </View>
)}
        />
        <View style={styles.content}>
          <TextInput
            style={styles.inputNote}
            textAlignVertical="top"
            numberOfLines={8}
            value={note}
            onChangeText={text => this.setState({ note: text })}
            placeholder="Alguma observação?"
          />
          <TextInput
            style={styles.input}
            value={cep}
            onChangeText={text => this.setState({ cep: text })}
            placeholder="Qual seu CEP?"
          />
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputStreet}
              value={street}
              onChangeText={text => this.setState({ street: text })}
              placeholder="Rua"
            />
            <TextInput
              style={styles.inputNumber}
              value={number}
              onChangeText={text => this.setState({ number: text })}
              placeholder="Nº"
            />
          </View>
          <TextInput
            style={styles.input}
            value={neighborhood}
            onChangeText={text => this.setState({ neighborhood: text })}
            placeholder="Bairro"
          />
        </View>
        <View style={styles.buttonGroup}>
          <PrimaryButton style={styles.primaryButton} onPress={this.setOrder}>
            <View style={styles.buttonProp}>
              <Text style={styles.textButton}>FINALIZAR</Text>
              <Icon name="chevron-right" size={20} color="#fff" />
            </View>
          </PrimaryButton>
        </View>
        <View>
          <Text>{error}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  orderProducts: state.order,
});

export default connect(mapStateToProps)(FinishOrder);
