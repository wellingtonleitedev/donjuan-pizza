import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, ScrollView, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as orderActions } from '../../store/ducks/order';
import styles from './styles';
import Header from '../../components/Header';
import api from '../../services/api';

class SizeSelect extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getSizes();
  }

  getSizes = async () => {
    const taste = this.props.navigation.getParam('taste');
    try {
      const response = await api.get(`/sizes/${taste}`);

      this.setState({
        data: [...response.data.sizes],
      });
    } catch (err) {
      console.log(err);
    }
  };

  sizeSelected = (index) => {
    const { data } = this.state;
    const {
      orderRequest,
      navigation: { navigate },
    } = this.props;

    const product = data.filter(product => product.id == index);

    orderRequest(product);
    navigate('ShoppingCart');
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.sizeSelected(item.id)}
      key={item.id}
      style={styles.flatlistContainer}
    >
      <View style={styles.flatlist}>
        <Image style={styles.flatlistImage} source={item.image} />
        <View style={styles.information}>
          <Text style={styles.title}>{item.size}</Text>
          <Text style={styles.price}>{item.pivot.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
                <Text style={styles.text}>Selecione um tamanho</Text>
              </View>
            </View>
)}
        />
        <View style={styles.content}>
          <ScrollView>
            <FlatList
              renderItem={this.renderItem}
              data={data}
              keyExtractor={item => item.id.toString()}
              numColumns={2}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  order: state,
});

const mapDispatchToProps = dispatch => bindActionCreators(orderActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SizeSelect);
