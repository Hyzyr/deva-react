import React from 'react';
import { imgFolder } from 'Global';

function FlyingMessage(props) {
     return (
          <div class="flyingMessage">
               <div class="flyingMessage__inner">
                    <div class="flyingMessage__inner-ico">
                         <img src={imgFolder + 'icons/check-select.svg'} alt="" />
                    </div>
                    <div class="flyingMessage__inner-content">
                         <span class="title2">Add 0.001588 ETH and 1.23224 AMPL</span>
                         <a href="#" class="para link--blue">
                              View on Etherscan
                         </a>
                    </div>
                    <button class="flyingMessage__inner-close">
                         <img src={imgFolder + 'icons/close-small.svg'} alt="" />
                    </button>
               </div>
          </div>
     );
}

export default FlyingMessage;
