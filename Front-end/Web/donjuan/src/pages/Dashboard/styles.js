import styled from 'styled-components';

export const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2em;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 100%;

  small {
    color: #706e7b;
  }
`;

export const Title = styled.h2`
  align-self: flex-start;
  font-size: 18px;
  color: #333333;
  text-align: left;
  margin-bottom: 30px;
`;

export const Order = styled.li`
  border-radius: 5px;
  box-shadow: 0px 0px 5px -3px #000;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 1em;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  p {
    font-size: 18px;
    color: #0b2031;
    margin-bottom: 5px;

    span {
      font-size: 18px;
      color: #0b2031;
      font-weight: bold;
    }
  }

  strong {
    font-size: 16px;
    color: #0b2031;
    font-weight: bold;
    margin-top: 5px;
  }
`;

export const Products = styled.ul`
  border-bottom: 1px solid #f1f1f1;
  border-top: 1px solid #f1f1f1;
  display: flex;
  flex-wrap: wrap;
  padding: 15px 0;
`;

export const Product = styled.li`
  border-radius: 5px;
  box-shadow: 0px 0px 5px -3px #000;
  display: flex;
  margin-right: 10px;
  max-width: 200px;
  padding: 10px;
  width: 100%;

  img {
    margin-right: 10px;
    max-height: 60px;
    max-width: 60px;
  }

  p {
    color: #0b2031;
    font-weight: bold;
  }
`;

export const Figure = styled.figure`
  margin-right: 10px;
  max-height: 60px;
  max-width: 60px;

  img {
    display: block;
    max-height: 100%;
    max-width: 100%;
  }
`;

export const Note = styled.p`
  font-size: 14px;
  color: #706e7b;
  margin-top: 10px;

  span {
    font-size: 14px;
    color: #706e7b;
    font-weight: bold;
  }
`;

export const Error = styled.p`
  border-radius: 5px;
  color: #dc3545;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 10px 20px;
  text-align: center;
`;
