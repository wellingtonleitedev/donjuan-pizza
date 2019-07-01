import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as orderActions } from '../../store/ducks/order';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import Header from '../../components/Header';
import { URLS } from '../../constants';

class ShoppingCart extends Component {
  componentDidMount() { }

  closeCart = () => {
    const { data } = this.props.orderProducts;

    this.props.navigation.navigate('FinishOrder', { overall: this.sumPrices(data) });
  };

  removeItem = (item) => {
    const { orderRemoveSuccess } = this.props;

    orderRemoveSuccess(item);
  };

  sumPrices = (data) => {
    const arr = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let value = 0;

    if (data.length) {
      data.map(val => arr.push(parseFloat(val.sizes[0].pivot.price)));

      value = arr.reduce(reducer);
    }

    return value.toFixed(2);
  };

  renderItem = ({ item }) => (
    <View key={item.id} style={styles.flatlistContainer}>
      <View style={styles.flatlist}>
        <View style={styles.imageView}>
          <Image
            style={styles.flatlistImage}
            source={{ uri: `${URLS.BASE_URL}/files/${item.image}` }}
          />
        </View>
        <View style={styles.information}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{item.sizes[0].size}</Text>
          <Text style={styles.price}>{item.sizes[0].pivot.price}</Text>
        </View>
        <View style={styles.iconDelete}>
          <Icon
            onPress={() => this.removeItem(item)}
            name="delete-forever"
            size={20}
            color="#e5293e"
          />
        </View>
      </View>
    </View>
  );

  render() {
    const {
      navigation,
      orderProducts: { data },
    } = this.props;
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
                <Text style={styles.text}>Carrinho</Text>
              </View>
              <Text style={styles.overall}>{`R$ ${this.sumPrices(data)}`}</Text>
            </View>
          )}
        />
        <View style={styles.content}>
          <ScrollView>
            <FlatList
              renderItem={this.renderItem}
              data={data}
              keyExtractor={item => String(item.id)}
            />
          </ScrollView>
        </View>
        {!data.length ? (
          <Text style={styles.clean}>Não há produtos em seu carrinho!</Text>
        ) : (
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
          )}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(orderActions, dispatch);

const mapStateToProps = state => ({
  orderProducts: state.order,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingCart);
