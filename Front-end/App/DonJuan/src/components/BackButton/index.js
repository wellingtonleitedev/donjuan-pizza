import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const BackButton = () => (
  <Icon
    onPress={this.props.navigation.pop()}
    style={styles.icon}
    name="chevron-left"
    size={24}
    color="#fff"
  />
);

export default BackButton;
