import React from 'react';

import { MenuCarousel } from './styles';

import img1 from '../../img/img1.jpeg';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.jpeg';
import img4 from '../../img/img4.jpeg';

function menu() {
  return (
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
  );
}

export default menu;