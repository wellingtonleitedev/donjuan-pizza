import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, ScrollView, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import IconDot from 'react-native-vector-icons/Octicons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import Header from '../../components/Header';
import api from '../../services/api';
import { URLS } from '../../constants';

class TypeSelect extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    this.getTypes();
  }

  getTypes = async () => {
    try {
      const types = await api.get('/types');
      this.setState({
        data: [...types.data],
      });
    } catch (err) {
      console.tron.log(err);
    }
  };

  typeSelected = (index) => {
    const {
      navigation: { navigate },
    } = this.props;

    navigate('TasteSelect', { type: index });
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.flatlistContainer}
      onPress={() => this.typeSelected(item.id)}
    >
      <View style={styles.flatlist}>
        <Image
          style={styles.flatlistImage}
          source={{ uri: `${URLS.BASE_URL}/files/type-${item.image}` }}
        />
        <View style={styles.information}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.timeView}>
            <Icon name="clock-fast" size={18} color="#706e7b" />
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    const { data } = this.state;
    const {
      navigation: { navigate },
      orders,
    } = this.props;

    return (
      <View style={styles.container}>
        <Header
          control={(
            <View style={styles.controls}>
              <Icon
                onPress={() => navigate('MyOrders')}
                file="MaterialCommunityIcons"
                name="restore-clock"
                size={24}
                color="#fff"
              />
              <Text style={styles.text}>Pizzaria Don Juan</Text>
              <View>
                {!!orders.data.length && (
                <IconDot
                  onPress={() => navigate('ShoppingCart')}
                  style={styles.baged}
                  name="primitive-dot"
                  size={20}
                  color="#c1d61e"
                />
                )}
                <IconSimple
                  onPress={() => navigate('ShoppingCart')}
                  style={styles.bag}
                  file="SimpleLineIcons"
                  name="handbag"
                  size={15}
                  color="#fff"
                />
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

const mapStateToProps = state => ({
  orders: state.order,
});

TypeSelect.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  orders: PropTypes.shape({
    data: PropTypes.array,
  }).isRequired,
};

export default connect(mapStateToProps)(TypeSelect);
