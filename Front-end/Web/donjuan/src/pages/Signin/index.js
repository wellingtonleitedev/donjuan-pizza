import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  Container, Form, Input, Button,
} from './styles';
import UserActions from '../../store/ducks/user';

class Signin extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };

  handleSignin = (e) => {
    e.preventDefault();

    const { userRequest } = this.props;
    const { email, password } = this.state;

    const data = {
      email,
      password,
    };

    if (!email || !password) {
      this.setState({
        error: 'Você precisa preencher todos os campos!',
      });
    } else {
      this.setState({
        error: '',
      });

      userRequest(data);
    }
  };

  render() {
    const { email, password, error } = this.state;
    const { user } = this.props;

    return (
      <Container>
        <Form onSubmit={this.handleSignin}>
          <img src="assets/images/logo.png" alt="Logo" />
          {error && <p className="error">{error}</p>}
          {user.error && <p className="error">{user.error}</p>}
          <Input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Input
            type="password"
            placeholder="Sua senha secreta"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Button>Entrar</Button>
        </Form>
      </Container>
    );
  }
}

Signin.propTypes = {
  userRequest: PropTypes.func.isRequired,
  user: PropTypes.shape({
    error: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
