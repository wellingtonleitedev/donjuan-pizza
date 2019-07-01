import React, { Component } from 'react';
import {
  View, Image, TextInput, Text, StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles';
import backgroundImage from '../../assets/fundo.png';
import logo from '../../assets/logo.png';
import PrimaryButton from '../../components/PrimaryButton';
import { Creators as loginActions } from '../../store/ducks/login';
import api from '../../services/api';
import { isAuthenticated, login } from '../../services/auth';

class Signin extends Component {
  state = {
    inputEmail: '',
    inputPass: '',
    error: '',
  };

  async componentDidMount() {
    if (await isAuthenticated()) {
      this.props.navigation.navigate('TypeSelect');
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
    console.tron.log(this.props);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#565b63" barStyle="light-content" />
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
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state,
});

const mapDispatchToProps = dispatch => bindActionCreators(loginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
