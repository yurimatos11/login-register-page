import React from 'react';

import { Footer } from './styles';

function footer() {
  return (
        <Footer>
           <div>
               <p>2021 Create by Yuri Matos</p>
               <div className="social">
                   <a href="https://github.com/yurimatos11"><i class="fab fa-github"></i></a>
                   <a href="https://www.linkedin.com/in/yuri-matos-82954717a/"><i class="fab fa-linkedin"></i></a>
               </div>
           </div>
        </Footer>
  );
}

export default footer;