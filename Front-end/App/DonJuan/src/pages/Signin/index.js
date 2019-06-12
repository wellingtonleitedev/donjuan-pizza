import React, { Component } from 'react';
import {
  View, Image, TextInput, Text,
} from 'react-native';
import styles from './styles';
import backgroundImage from '../../assets/fundo.png';
import logo from '../../assets/logo.png';
import PrimaryButton from '../../components/PrimaryButton';
import api from '../../services/api';

class Signin extends Component {
  state = {
    inputEmail: '',
    inputPass: '',
    error: '',
  };

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
        const response = await api.post('signin', {
          email: inputEmail,
          password: inputPass,
        });

        console.tron.log(response);
        navigate('TypeSelect');
      } catch (err) {
        console.log(err);
        this.setState({
          error: 'Não foi possível acessar, verifique as credenciais',
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
        <Image style={styles.bgImage} source={backgroundImage} />
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
          />
          <TextInput
            autoCapitalize="none"
            secureTextEntry
            style={styles.input}
            placeholder="Senha secreta"
            value={inputPass}
            onChangeText={text => this.setState({ inputPass: text })}
          />
          <PrimaryButton onPress={this.handleSignin} style={styles.button}>
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
