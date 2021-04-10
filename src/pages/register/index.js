import React from 'react';

import { Container } from './styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Form2 from '../../components/form2'; 

function register() {
  return (
      <>
        <Container>
            <Header />
                <Form2 />
            <Footer />
        </Container>
      </>
  );
}

export default register;