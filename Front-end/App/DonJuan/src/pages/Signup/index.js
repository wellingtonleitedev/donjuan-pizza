import React, { Component } from 'react';
import {
  View, Image, TextInput, Text, StatusBar,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import styles from './styles';
import backgroundImage from '../../assets/fundo.png';
import logo from '../../assets/logo.png';
import PrimaryButton from '../../components/PrimaryButton';
import api from '../../services/api';

export default class Signup extends Component {
  state = {
    inputEmail: '',
    inputPass: '',
    inputName: '',
    error: '',
  };

  handleSignup = async () => {
    const { inputName, inputEmail, inputPass } = this.state;
    const {
      navigation: { navigate },
    } = this.props;

    if (!inputName || !inputEmail || !inputPass) {
      this.setState({
        error: 'Você precisa preencher todos os campos!',
      });
    } else {
      try {
        await api.post('/signup', {
          name: inputName,
          email: inputEmail,
          password: inputPass,
        });
        navigate('Signin');
      } catch (err) {
        this.setState({
          error: 'Não foi possível criar usuário!',
        });
      }
    }
  };

  render() {
    const {
      navigation: { navigate },
    } = this.props;

    const {
      inputEmail, inputPass, inputName, error,
    } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#565b63" barStyle="light-content" />
        <Image style={styles.bgImage} source={backgroundImage} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.form}>
            <View style={styles.logoView}>
              <Image style={styles.logo} source={logo} />
            </View>
            {!!error && <Text style={styles.errorText}>{error}</Text>}
            <TextInput
              autoCapitalize="sentences"
              style={styles.input}
              placeholder="Nome completo"
              value={inputName}
              onChangeText={text => this.setState({ inputName: text })}
              returnKeyType="next"
              onSubmitEditing={() => this.emailInput.focus()}
            />
            <TextInput
              ref={(input) => {
                this.emailInput = input;
              }}
              autoCapitalize="none"
              style={styles.input}
              placeholder="Seu e-mail"
              value={inputEmail}
              onChangeText={text => this.setState({ inputEmail: text })}
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => this.passInput.focus()}
            />
            <TextInput
              ref={(input) => {
                this.passInput = input;
              }}
              autoCapitalize="none"
              secureTextEntry
              style={styles.input}
              placeholder="Senha secreta"
              value={inputPass}
              onChangeText={text => this.setState({ inputPass: text })}
              returnKeyType="send"
              onSubmitEditing={this.handleSignup}
            />
            <PrimaryButton onPress={this.handleSignup} style={styles.button}>
              <Text style={styles.text}>Criar conta</Text>
            </PrimaryButton>
            <Text style={styles.text} onPress={() => navigate('Signin')}>
              Já tenho login
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

Signup.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
