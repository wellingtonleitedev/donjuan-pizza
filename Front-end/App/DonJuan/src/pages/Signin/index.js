import React, { Component } from 'react';
import {
  View, Image, TextInput, Text,
} from 'react-native';
import styles from './styles';
import backgroundImage from '../../assets/fundo.png';
import logo from '../../assets/logo.png';
import PrimaryButton from '../../components/PrimaryButton';

class Signin extends Component {
  state = {
    inputEmail: '',
    inputPass: '',
  };

  render() {
    const {
      navigation: { navigate },
    } = this.props;

    const { inputEmail, inputPass } = this.state;

    return (
      <View style={styles.container}>
        <Image style={styles.bgImage} source={backgroundImage} />
        <View style={styles.form}>
          <View style={styles.logoView}>
            <Image style={styles.logo} source={logo} />
          </View>
          <TextInput
            autoCapitalize="none"
            style={styles.input}
            placeholder="Seu e-mail"
            value={inputEmail}
            onChangeText={text => this.setState({ inputEmail: text })}
          />
          <TextInput
            autoCapitalize="none"
            secureTextEntry
            style={styles.input}
            placeholder="Senha secreta"
            value={inputPass}
            onChangeText={text => this.setState({ inputPass: text })}
          />
          <PrimaryButton onPress={() => navigate('TypeSelect')} style={styles.button}>
            <Text style={styles.text}>Entrar</Text>
          </PrimaryButton>
          <Text style={styles.text} onPress={() => navigate('Signup')}>
            Criar conta gratuita
          </Text>
        </View>
      </View>
    );
  }
}

export default Signin;
