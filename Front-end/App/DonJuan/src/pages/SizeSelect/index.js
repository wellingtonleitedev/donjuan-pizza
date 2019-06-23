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
import api from '../../services/api'

class SizeSelect extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getSizes()
  }

  getSizes = async () => {
    const taste = this.props.navigation.getParam('taste')
    try {
      const response = await api.get(`/sizes/${taste}`)

      this.setState({
        data: [...response.data.sizes]
      })

    } catch (err) {
      console.log(err)
    }
  }

  sizeSelected = (index) => {
    console.log(index);
    const { data } = this.state

    const product = data.filter(product => product.id == index)
    console.log(product)

    this.props.navigation.navigate('ShoppingCart');
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

export default SizeSelect;
