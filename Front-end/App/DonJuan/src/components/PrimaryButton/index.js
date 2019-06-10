import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const PrimaryButton = ({ children, onPress, style }) => (
  <TouchableOpacity style={style} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

PrimaryButton.propTypes = {
  children: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,
};
export default PrimaryButton;
