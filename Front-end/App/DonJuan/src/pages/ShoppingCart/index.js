import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconSimple from "react-native-vector-icons/SimpleLineIcons";
import styles from "./styles";
import calabresa from "../../assets/Pizzas/2.png";
import quatroq from "../../assets/Pizzas/6.png";
import soda from "../../assets/coca.png";
import Header from "../../components/Header";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: [
      {
        id: 1,
        image: calabresa,
        product: "Pizza Calabresa",
        description: "Tamanho: Média",
        price: "R$ 42,00"
      },
      {
        id: 2,
        image: quatroq,
        product: "Pizza Quatro Queijos",
        description: "Tamanho: Pequena",
        price: "R$ 29,00"
      },
      {
        id: 3,
        image: soda,
        product: "Coca cola",
        description: "Lata 300ML",
        price: "R$ 6,00"
      }
    ]
  };

  renderItem = ({ item }) => (
    <TouchableOpacity key={item.id} style={styles.flatlistContainer}>
      <View style={styles.flatlist}>
        <Image style={styles.flatlistImage} source={item.image} />
        <View style={styles.information}>
          <Text style={styles.title}>{item.product}</Text>
          <Text style={styles.description}>{item.description}</Text>
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
          control={
            <View style={styles.controls}>
              <Icon
                file="MaterialCommunityIcons"
                name="restore-clock"
                size={24}
                color="#fff"
              />
              <Text style={styles.text}>Pizzaria Don Juan</Text>
              <IconSimple
                style={styles.baged}
                file="SimpleLineIcons"
                name="handbag"
                size={15}
                color="#fff"
              />
            </View>
          }
        />
        <View style={styles.content}>
          <ScrollView>
            <FlatList
              renderItem={this.renderItem}
              data={data}
              keyExtractor={item => item.id}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default ShoppingCart;
