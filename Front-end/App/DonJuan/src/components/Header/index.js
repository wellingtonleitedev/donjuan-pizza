import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import headerBg from '../../assets/header-background.png';

const Header = ({ control }) => (
  <View style={styles.container}>
    <Image style={styles.bgImage} source={headerBg} />
    {control}
  </View>
);

Header.propTypes = {
  control: PropTypes.element.isRequired,
};

export default Header;
