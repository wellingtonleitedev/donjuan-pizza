import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import Header from '../../components/Header';

class ShoppingCart extends Component {
  state = {
    overall: 0,
    clean: true,
  };

  componentDidMount() {
    const { orderProducts } = this.props;

    if (orderProducts.data.length) {
      this.setState({
        clean: false,
      });

      this.sumPrices(orderProducts);
    }
  }

  closeCart = () => {
    const { overall } = this.state;
    this.props.navigation.navigate('FinishOrder', { overall });
  };

  sumPrices = ({ price }) => {
    const arr = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    price.map(val => arr.push(parseFloat(val)));

    const value = arr.reduce(reducer);

    this.setState({
      overall: value,
    });
  };

  renderItem = ({ item }) => (
    <View key={item.id} style={styles.flatlistContainer}>
      <View style={styles.flatlist}>
        <View style={styles.imageView}>
          <Image style={styles.flatlistImage} source={{ uri: `http://10.0.3.2:3333/files/${item.image}` }} />
        </View>
        <View style={styles.information}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{item.sizes[0].size}</Text>
          <Text style={styles.price}>{item.sizes[0].pivot.price}</Text>
        </View>
        <View style={styles.iconDelete}>
          <Icon name="delete-forever" size={20} color="#e5293e" />
        </View>
      </View>
    </View>
  );

  render() {
    const { overall, clean } = this.state;
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
              <Text style={styles.overall}>{`R$ ${overall.toFixed(2)}`}</Text>
            </View>
)}
        />
        <View style={styles.content}>
          <ScrollView>
            <FlatList
              renderItem={this.renderItem}
              data={data}
              keyExtractor={item => item.id.toString()}
            />
          </ScrollView>
        </View>
        {clean ? (
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

const mapStateToProps = state => ({
  orderProducts: state.order,
});

export default connect(mapStateToProps)(ShoppingCart);
