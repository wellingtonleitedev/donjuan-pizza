/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, ScrollView, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import styles from './styles';
import Header from '../../components/Header';
import api from '../../services/api';
import { URLS } from '../../constants';

export default class TasteSelect extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getTastes();
  }

  getTastes = async () => {
    const {
      navigation: { getParam },
    } = this.props;

    const type = getParam('type');
    try {
      const { data } = await api.get(`/tastes/${type}`);

      data.map((taste) => {
        taste.image = `${taste.type.id}-${taste.image}`;
      });

      this.setState({
        data: [...data],
      });
    } catch (err) {
      console.tron.log(err);
    }
  };

  tasteSelected = (index) => {
    const {
      navigation: { navigate },
    } = this.props;

    navigate('SizeSelect', { taste: index });
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.tasteSelected(item.id)}
      key={item.id}
      style={styles.flatlistContainer}
    >
      <View style={styles.flatlist}>
        <Image
          style={styles.flatlistImage}
          source={{ uri: `${URLS.BASE_URL}/files/${item.image}` }}
        />
        <Text style={styles.title}>{item.name}</Text>
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
                <Text style={styles.text}>Selecione um tipo</Text>
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

TasteSelect.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    pop: PropTypes.func,
  }).isRequired,
};
