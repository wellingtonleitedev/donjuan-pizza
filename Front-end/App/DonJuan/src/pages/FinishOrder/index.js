import React, { Component } from 'react';
import {
  View, Text, TextInput, ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import Header from '../../components/Header';
import api from '../../services/api';
import orderActions from '../../store/ducks/order';

class FinishOrder extends Component {
  state = {
    note: '',
    cep: '',
    street: '',
    number: '',
    neighborhood: '',
    error: '',
  };

  fetchCep = async () => {
    const { cep } = this.state;

    try {
      const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`);

      this.setState({
        street: response.data.logradouro,
        neighborhood: response.data.bairro,
      });
    } catch (err) {
      console.tron.log(err);
    }
  };

  setOrder = async () => {
    const {
      note, cep, street, number, neighborhood,
    } = this.state;

    const {
      clearOrderRequest,
      orderProducts: { data },
      navigation: { getParam },
    } = this.props;

    const overall = getParam('overall');

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
          size_id: product.size_id,
        });
      });

      clearOrderRequest();
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
    const {
      navigation: { pop, getParam },
    } = this.props;

    const overall = getParam('overall');

    return (
      <View style={styles.container}>
        <Header
          control={(
            <View style={styles.controls}>
              <View style={styles.headerTitle}>
                <Icon
                  onPress={() => pop()}
                  style={styles.icon}
                  name="chevron-left"
                  size={24}
                  color="#fff"
                />
                <Text style={styles.text}>Realizar pedido</Text>
              </View>
              <Text style={styles.priceTotal}>{`R$ ${overall}`}</Text>
            </View>
)}
        />
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
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
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => this.numberInput.focus()}
            onBlur={this.fetchCep}
          />
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputStreet}
              value={street}
              onChangeText={text => this.setState({ street: text })}
              placeholder="Rua"
            />
            <TextInput
              ref={(input) => {
                this.numberInput = input;
              }}
              style={styles.inputNumber}
              value={number}
              onChangeText={text => this.setState({ number: text })}
              placeholder="Nº"
              keyboardType="numeric"
            />
          </View>
          <TextInput
            style={styles.input}
            value={neighborhood}
            onChangeText={text => this.setState({ neighborhood: text })}
            placeholder="Bairro"
          />
        </ScrollView>
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

FinishOrder.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    pop: PropTypes.func,
  }).isRequired,
  orderProducts: PropTypes.shape({
    data: PropTypes.array,
  }).isRequired,
  clearOrderRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(orderActions, dispatch);

const mapStateToProps = state => ({
  orderProducts: state.order,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FinishOrder);
