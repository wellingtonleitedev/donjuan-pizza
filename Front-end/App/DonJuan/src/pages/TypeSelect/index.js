import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, ScrollView, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import pizzaImage from '../../assets/pizzas.png';
import pasteImage from '../../assets/calzones.png';
import calzoneImage from '../../assets/massas.png';
import sodaImage from '../../assets/bebidas.png';
import drinkImage from '../../assets/alcoolicas.png';
import Header from '../../components/Header';
import api from '../../services/api';

class TypeSelect extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getTypes();
  }

  getTypes = async () => {
    try {
      const types = await api.get('/types');
      types.data.map(async (type) => {
        const file = await api.get(`/files/${type.image}`);
        type.image = file.config.url;
      });

      this.setState({
        data: [...types.data],
      });

    } catch (err) {
      console.log(err);
    }
  };

  typeSelected = (index) => {
    this.props.navigation.navigate('TasteSelect', { type: index });
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.flatlistContainer}
      onPress={() => this.typeSelected(item.id)}
    >
      <View style={styles.flatlist}>
        <Image style={styles.flatlistImage} source={{ uri: item.image }} />
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
    return (
      <View style={styles.container}>
        <Header
          control={(
            <View style={styles.controls}>
              <Icon file="MaterialCommunityIcons" name="restore-clock" size={24} color="#fff" />
              <Text style={styles.text}>Pizzaria Don Juan</Text>
              <IconSimple
                style={styles.baged}
                file="SimpleLineIcons"
                name="handbag"
                size={15}
                color="#fff"
              />
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
      </View>
    );
  }
}

export default TypeSelect;
