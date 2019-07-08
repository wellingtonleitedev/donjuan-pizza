/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import {
  View, Text, FlatList, ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { distanceInWordsToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import styles from './styles';
import Header from '../../components/Header';
import api from '../../services/api';

export default class MyOrders extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getOrders();
  }

  getOrders = async () => {
    try {
      const { data } = await api.get('my-orders');

      data.map((order) => {
        order.updated_at = distanceInWordsToNow(order.updated_at, {
          locale: pt,
        });
      });

      this.setState({
        data: [...data],
      });
    } catch (err) {
      console.tron.log(err);
    }
  };

  closeCart = () => {
    const {
      navigation: { navigate },
    } = this.props;

    navigate('FinishOrder');
  };

  renderItem = ({ item }) => (
    <View key={item.id} style={styles.flatlistContainer}>
      <View style={styles.flatlist}>
        <View style={styles.information}>
          <Text style={styles.title}>{`Pedido #${item.id}`}</Text>
          <Text style={styles.description}>{item.updated_at}</Text>
          <Text style={styles.price}>{item.overall}</Text>
        </View>
      </View>
    </View>
  );

  render() {
    const { data } = this.state;
    const {
      navigation: { popToTop },
    } = this.props;
    return (
      <View style={styles.container}>
        <Header
          control={(
            <View style={styles.controls}>
              <View style={styles.headerTitle}>
                <Icon
                  onPress={() => popToTop()}
                  style={styles.icon}
                  name="chevron-left"
                  size={24}
                  color="#fff"
                />
                <Text style={styles.text}>Meus pedidos</Text>
              </View>
            </View>
)}
        />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              renderItem={this.renderItem}
              data={data}
              keyExtractor={item => item.id.toString()}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

MyOrders.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    popToTop: PropTypes.func,
  }).isRequired,
};
