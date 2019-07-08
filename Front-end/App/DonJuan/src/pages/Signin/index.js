import React, { Component } from 'react';
import {
  View, Image, TextInput, Text, StatusBar, ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import backgroundImage from '../../assets/fundo.png';
import logo from '../../assets/logo.png';
import PrimaryButton from '../../components/PrimaryButton';
import api from '../../services/api';
import { isAuthenticated, login } from '../../services/auth';

export default class Signin extends Component {
  state = {
    inputEmail: '',
    inputPass: '',
    error: '',
  };

  async componentDidMount() {
    const { navigation } = this.props;
    if (await isAuthenticated()) {
      navigation.navigate('TypeSelect');
    }
  }

  handleSignin = async () => {
    const { inputEmail, inputPass } = this.state;

    const {
      navigation: { navigate },
    } = this.props;

    if (!inputEmail || !inputPass) {
      this.setState({
        error: 'Você precisa preencher todos os campos!',
      });
    } else {
      try {
        const response = await api.post('signin-app', {
          email: inputEmail,
          password: inputPass,
        });
        login(response.data.token);
        navigate('TypeSelect');
      } catch (err) {
        let error = null;
        if (err.message === 'Request failed with status code 417') {
          error = 'Esse usuário não tem permissão para acessar!';
        } else {
          error = 'Não foi possível acessar, verifique as credenciais.';
        }

        this.setState({
          error,
        });
      }
    }
  };

  render() {
    const {
      navigation: { navigate },
    } = this.props;

    const { inputEmail, inputPass, error } = this.state;
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
              autoCapitalize="none"
              style={styles.input}
              placeholder="Seu e-mail"
              value={inputEmail}
              onChangeText={text => this.setState({ inputEmail: text })}
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
            />
            <TextInput
              ref={(input) => {
                this.passwordInput = input;
              }}
              autoCapitalize="none"
              secureTextEntry
              style={styles.input}
              placeholder="Senha secreta"
              value={inputPass}
              onChangeText={text => this.setState({ inputPass: text })}
              returnKeyType="send"
              onSubmitEditing={this.handleSignin}
            />
            <PrimaryButton onPress={this.handleSignin} style={styles.button}>
              <Text style={styles.text}>Entrar</Text>
            </PrimaryButton>
            <Text style={styles.text} onPress={() => navigate('Signup')}>
              Criar conta gratuita
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

Signin.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
