import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, ScrollView, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import Header from '../../components/Header';

class ShoppingCart extends Component {
  state = {
    data: [
      {
        id: 1,
        time: 'Ontem às 17h',
        price: 'R$ 42,00',
      },
      {
        id: 2,
        time: 'Há 1 semana',
        price: 'R$ 142,00',
      },
      {
        id: 3,
        time: 'Há dois meses',
        price: 'R$ 78,00',
      },
    ],
  };

  closeCart = () => {
    this.props.navigation.navigate('FinishOrder');
  };

  renderItem = ({ item }) => (
    <View key={item.id} style={styles.flatlistContainer}>
      <View style={styles.flatlist}>
        <View style={styles.information}>
          <Text style={styles.title}>
Pedido #
            {item.id}
          </Text>
          <Text style={styles.description}>{item.time}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    </View>
  );

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <Header
          control={(
            <View style={styles.controls}>
              <View style={styles.headerTitle}>
                <Icon style={styles.icon} name="chevron-left" size={24} color="#fff" />
                <Text style={styles.text}>Meus pedidos</Text>
              </View>
            </View>
)}
        />
        <View style={styles.content}>
          <ScrollView>
            <FlatList renderItem={this.renderItem} data={data} keyExtractor={item => item.id} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default ShoppingCart;
