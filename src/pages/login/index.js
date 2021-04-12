import React from 'react';

import { Container } from './styles';
import Header from '../../components/header';
import MenuCarousel from '../../components/MenuCarousel';
import Form from '../../components/form';
import Footer from '../../components/footer';

function login() {
  return (
      <>
        <Container>
            <Header />
            <div className="principal">
              <MenuCarousel />
              <Form />
            </div>
            <Footer />
        </Container>
      </>
  );
}

export default login;