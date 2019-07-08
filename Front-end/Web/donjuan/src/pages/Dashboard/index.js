/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { distanceInWordsToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import {
  Container,
  Title,
  Content,
  Order,
  Description,
  Product,
  Products,
  Figure,
  Note,
  Error,
} from './styles';
import Header from '../../components/Header';
import api from '../../services/api';
import { logout } from '../../services/auth';

class Dashboard extends Component {
  state = {
    data: [],
    error: null,
  };

  componentDidMount() {
    this.fetchOrders();
  }

  handleLogout = async () => {
    const { history } = this.props;

    await logout();

    history.push('/');
  };

  fetchOrders = async () => {
    try {
      const { data } = await api.get('orders');

      data.map((order) => {
        order.overall = order.overall.replace('.', ',');
        order.created_at = distanceInWordsToNow(order.created_at, {
          locale: pt,
        });
      });

      this.setState({
        data,
      });
    } catch (err) {
      this.setState({
        error: 'Você não possui pedidos!',
      });
    }
  };

  render() {
    const { data, error } = this.state;
    const { user } = this.props;

    return (
      <Fragment>
        <Header name={user.data.name} onClick={this.handleLogout} />
        <Container>
          <Content>
            <Title>Últimos pedidos</Title>
            {error && <Error>{error}</Error>}
            <ul>
              {data.map(order => (
                <Order key={String(order.id)}>
                  <Description>
                    <p>
                      Pedido
                      {' '}
                      <span>
#
                        {order.id}
                      </span>
                      {' '}
-
                      {' '}
                      {order.user.name}
                    </p>
                    <small>{order.created_at}</small>
                    <strong>
R$
                      {order.overall}
                    </strong>
                  </Description>
                  <Products>
                    {order.products.map(product => (
                      <Product key={String(product.id)}>
                        <Figure>
                          <img
                            src={`http://localhost:3333/files/${product.type_id}-${product.tastes.image}`}
                            alt="Imagem do produto"
                          />
                        </Figure>
                        <div>
                          <p>{product.tastes.name}</p>
                          <small>{product.size.size}</small>
                        </div>
                      </Product>
                    ))}
                  </Products>
                  <Note>
                    <span>Observações:</span>
                    {' '}
                    {order.note}
                  </Note>
                </Order>
              ))}
            </ul>
          </Content>
        </Container>
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  history: PropTypes.arrayOf.isRequired,
  user: PropTypes.shape({
    data: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Dashboard);
