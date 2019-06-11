import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import Header from '../../components/Header';

class FinishOrder extends Component {
  state = {
    note: '',
    cep: '',
    street: '',
    number: '',
    neighbor: '',
  };

  render() {
    const {
      note, cep, street, number, neighbor,
    } = this.state;
    return (
      <View style={styles.container}>
        <Header
          control={(
            <View style={styles.controls}>
              <View style={styles.headerTitle}>
                <Icon style={styles.icon} name="chevron-left" size={24} color="#fff" />
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
            value={neighbor}
            onChangeText={text => this.setState({ neighbor: text })}
            placeholder="Bairro"
          />
        </View>
        <View style={styles.buttonGroup}>
          <PrimaryButton
            style={styles.primaryButton}
            onPress={() => this.props.navigation.navigate('MyOrders')}
          >
            <View style={styles.buttonProp}>
              <Text style={styles.textButton}>FINALIZAR</Text>
              <Icon name="chevron-right" size={20} color="#fff" />
            </View>
          </PrimaryButton>
        </View>
      </View>
    );
  }
}

export default FinishOrder;
