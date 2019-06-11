import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, ScrollView, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import styles from './styles';
import portuguesa from '../../assets/Pizzas/1.png';
import calabresa from '../../assets/Pizzas/2.png';
import frango from '../../assets/Pizzas/3.png';
import marguerita from '../../assets/Pizzas/4.png';
import legumes from '../../assets/Pizzas/5.png';
import quatroq from '../../assets/Pizzas/6.png';
import Header from '../../components/Header';

class TasteSelect extends Component {
  state = {
    data: [
      {
        id: 1,
        image: portuguesa,
        taste: 'Portuguesa',
      },
      {
        id: 2,
        image: calabresa,
        taste: 'Calabresa',
      },
      {
        id: 3,
        image: frango,
        taste: 'Frango Frito',
      },
      {
        id: 4,
        image: marguerita,
        taste: 'Marguerita',
      },
      {
        id: 5,
        image: legumes,
        taste: 'Legumes',
      },
      {
        id: 6,
        image: quatroq,
        taste: 'Quatro Queijos',
      },
    ],
  };

  tasteSelected = (index) => {
    console.tron.log(index);
    this.props.navigation.navigate('SizeSelect');
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={index => this.tasteSelected(index)}
      key={item.id}
      style={styles.flatlistContainer}
    >
      <View style={styles.flatlist}>
        <Image style={styles.flatlistImage} source={item.image} />
        <Text style={styles.title}>{item.taste}</Text>
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
                <Text style={styles.text}>Selecione um tipo</Text>
              </View>
            </View>
)}
        />
        <View style={styles.content}>
          <ScrollView>
            <FlatList
              renderItem={this.renderItem}
              data={data}
              keyExtractor={item => item.id}
              numColumns={2}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default TasteSelect;
