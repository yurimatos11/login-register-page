import React from 'react';

import { Container, MenuCarousel } from './styles';
import Header from '../../components/header';
import Form from '../../components/form';

import img1 from '../../img/img1.jpeg';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.jpeg';
import img4 from '../../img/img4.jpeg';


function login() {
  return (
      <>
        <Container>
            <Header />
            <MenuCarousel>
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={img1} className="img" alt="img1" />
                  </div>
                  <div className="carousel-item">
                    <img src={img2} className="img" alt="img2" />
                  </div>
                  <div className="carousel-item">
                    <img src={img3} className="img" alt="img3" />
                  </div>
                  <div className="carousel-item">
                    <img src={img4} className="img" alt="img4" />
                  </div>
                </div>
              </div>
            </MenuCarousel>
            <Form />
        </Container>
      </>
  );
}

export default login;