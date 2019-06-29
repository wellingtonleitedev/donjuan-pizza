import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, ScrollView, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import Header from '../../components/Header';
import api from '../../services/api';

class TasteSelect extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getTastes();
  }

  getTastes = async () => {
    const type = this.props.navigation.getParam('type');
    try {
      const { data } = await api.get(`/tastes/${type}`);

      data.map((taste) => {
        taste.image = `${taste.type.name.toLowerCase()}-${taste.image}`;
      });

      this.setState({
        data: [...data],
      });
    } catch (err) {
      console.log(err);
    }
  };

  tasteSelected = (index) => {
    this.props.navigation.navigate('SizeSelect', { taste: index });
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
          source={{ uri: `http://10.0.3.2:3333/files/${item.image}` }}
        />
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    const { data } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header
          control={(
            <View style={styles.controls}>
              <View style={styles.headerTitle}>
                <Icon
                  onPress={() => navigation.pop()}
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

export default TasteSelect;
