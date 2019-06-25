import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import styles from './styles';
import calabresa from '../../assets/Pizzas/2.png';
import quatroq from '../../assets/Pizzas/6.png';
import soda from '../../assets/coca.png';
import PrimaryButton from '../../components/PrimaryButton';
import Header from '../../components/Header';

class ShoppingCart extends Component {
  state = {
    data: [
      {
        id: 1,
        image: calabresa,
        product: 'Pizza Calabresa',
        description: 'Tamanho: Média',
        price: 'R$ 42,00',
      },
      {
        id: 2,
        image: quatroq,
        product: 'Pizza Quatro Queijos',
        description: 'Tamanho: Pequena',
        price: 'R$ 29,00',
      },
      {
        id: 3,
        image: soda,
        product: 'Coca cola',
        description: 'Lata 300ML',
        price: 'R$ 6,00',
      },
    ],
  };

  closeCart = () => {
    this.props.navigation.navigate('FinishOrder');
  };

  renderItem = ({ item }) => (
    <View key={item.id} style={styles.flatlistContainer}>
      <View style={styles.flatlist}>
        <View style={styles.imageView}>
          <Image style={styles.flatlistImage} source={item.image} />
        </View>
        <View style={styles.information}>
          <Text style={styles.title}>{item.product}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <View style={styles.iconDelete}>
          <Icon name="delete-forever" size={20} color="#e5293e" />
        </View>
      </View>
    </View>
  );

  render() {
    const { data } = this.state;
    const { orderProducts } = this.props;
    console.tron.log('PROPRIEDADE', orderProducts);
    return (
      <View style={styles.container}>
        <Header
          control={(
            <View style={styles.controls}>
              <View style={styles.headerTitle}>
                <Icon style={styles.icon} name="chevron-left" size={24} color="#fff" />
                <Text style={styles.text}>Carrinho</Text>
              </View>
              <Text style={styles.priceTotal}>R$ 107,00</Text>
            </View>
)}
        />
        <View style={styles.content}>
          <ScrollView>
            <FlatList renderItem={this.renderItem} data={data} keyExtractor={item => item.id} />
          </ScrollView>
        </View>
        <View style={styles.buttonGroup}>
          <IconMaterial
            onPress={() => this.props.navigation.navigate('TypeSelect')}
            style={styles.iconAdd}
            name="add-shopping-cart"
            size={20}
            color="#666666"
          />
          <PrimaryButton style={styles.primaryButton} onPress={index => this.closeCart(index)}>
            <View style={styles.buttonProp}>
              <Text style={styles.textButton}>REALIZAR PEDIDO</Text>
              <Icon name="chevron-right" size={20} color="#fff" />
            </View>
          </PrimaryButton>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  orderProducts: state.order,
});

export default connect(mapStateToProps)(ShoppingCart);
