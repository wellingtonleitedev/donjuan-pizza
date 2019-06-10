import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, ScrollView, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import styles from './styles';
import pizzaImage from '../../assets/pizzas.png';
import pasteImage from '../../assets/calzones.png';
import calzoneImage from '../../assets/massas.png';
import sodaImage from '../../assets/bebidas.png';
import drinkImage from '../../assets/alcoolicas.png';
import Header from '../../components/Header';

class TypeSelect extends Component {
  constructor(props) {
    super(props);
    this.typeSelected = this.typeSelected.bind(this);
  }

  state = {
    data: [
      {
        id: 1,
        image: pizzaImage,
        type: 'Pizzas',
        description: 'Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome.',
        time: '30 mins',
      },
      {
        id: 2,
        image: pasteImage,
        type: 'Massas',
        description: '10 tipos de massas com diferentes molhos para te satisfazer.',
        time: '25 mins',
      },
      {
        id: 3,
        image: calzoneImage,
        type: 'Calzones',
        description: 'Calzones super recheados com mais de 50 sabores diferentes.',
        time: '15 mins',
      },
      {
        id: 4,
        image: sodaImage,
        type: 'Bebidas não-alcóolicas',
        description: 'Refrigerantes, sucos, chá gelado, energéticos e água.',
        time: '5 mins',
      },
      {
        id: 5,
        image: drinkImage,
        type: 'Bebidas alcóolicas',
        description: 'Cervejas artesanais, vinhos e destilados.',
        time: '5 mins',
      },
    ],
  };

  typeSelected = (index) => {
    console.tron.log(index);
    this.props.navigation.navigate('TasteSelect');
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.flatlistContainer}
      onPress={() => this.typeSelected(item.id)}
    >
      <View style={styles.flatlist}>
        <Image style={styles.flatlistImage} source={item.image} />
        <View style={styles.information}>
          <Text style={styles.title}>{item.type}</Text>
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
            <FlatList renderItem={this.renderItem} data={data} keyExtractor={item => item.id} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default TypeSelect;
