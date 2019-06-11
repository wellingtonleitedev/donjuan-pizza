import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, ScrollView, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import styles from './styles';
import gigante from '../../assets/Tamanhos/tamanho-gg.png';
import grande from '../../assets/Tamanhos/tamanho-g.png';
import media from '../../assets/Tamanhos/tamanho-m.png';
import pequena from '../../assets/Tamanhos/tamanho-p.png';
import Header from '../../components/Header';

class SizeSelect extends Component {
  state = {
    data: [
      {
        id: 1,
        image: gigante,
        size: 'Gigante',
        price: 'R$ 76,00',
      },
      {
        id: 2,
        image: grande,
        size: 'Grande',
        price: 'R$ 59,00',
      },
      {
        id: 3,
        image: media,
        size: 'Média',
        price: 'R$ 42,00',
      },
      {
        id: 4,
        image: pequena,
        size: 'Pequena',
        price: 'R$ 29,00',
      },
    ],
  };

  sizeSelected = (index) => {
    console.tron.log(index);
    this.props.navigation.navigate('ShoppingCart');
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={index => this.sizeSelected(index)}
      key={item.id}
      style={styles.flatlistContainer}
    >
      <View style={styles.flatlist}>
        <Image style={styles.flatlistImage} source={item.image} />
        <View style={styles.information}>
          <Text style={styles.title}>{item.size}</Text>
          <Text style={styles.price}>{item.price}</Text>
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
              keyExtractor={item => item.id}
              numColumns={2}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default SizeSelect;
