/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, ScrollView, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import orderActions from '../../store/ducks/order';
import styles from './styles';
import Header from '../../components/Header';
import api from '../../services/api';
import { URLS } from '../../constants';

class SizeSelect extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getSizes();
  }

  getSizes = async () => {
    const {
      navigation: { getParam },
    } = this.props;
    const taste = getParam('taste');
    try {
      const { data } = await api.get(`/sizes/${taste}`);

      data.sizes.map((size) => {
        size.image = `${data.type.name.toLowerCase()}-${size.image}`;
      });

      this.setState({
        data: [...data.sizes],
      });
    } catch (err) {
      console.tron.log(err);
    }
  };

  sizeSelected = (index) => {
    const { data } = this.state;
    const { setOrderRequest } = this.props;

    const product = data.filter(item => item.id === index);

    setOrderRequest(...product);
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.sizeSelected(item.id)}
      key={item.id}
      style={styles.flatlistContainer}
    >
      <View style={styles.flatlist}>
        <Image
          style={styles.flatlistImage}
          source={{ uri: `${URLS.BASE_URL}/files/${item.image}` }}
        />
        <View style={styles.information}>
          <Text style={styles.title}>{item.size}</Text>
          <Text style={styles.price}>{item.pivot.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    const { data } = this.state;
    const {
      navigation: { pop },
    } = this.props;
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
                <Text style={styles.text}>Selecione um tamanho</Text>
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
              numColumns={2}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

SizeSelect.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    pop: PropTypes.func,
  }).isRequired,
  setOrderRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  order: state,
});

const mapDispatchToProps = dispatch => bindActionCreators(orderActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SizeSelect);
