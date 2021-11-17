import React from 'react';
import {eyeIco, qrIco} from 'SVG';

export default function Welcome() {
     return (
          <section class="welcome">
               <div class="auto__containerSm">
                    <div class="welcome__inner">
                         <div class="welcome__inner-header">
                              <h3 class="h3 h3--thin">Welcome Back!</h3>
                              <h6 class="h6 h6--thin">The decentralized web awaits</h6>
                         </div>
                         <div class="welcome__inner-body">
                              <div class="welcome__inner-body-row">
                                   <div class="input__outer ">
                                        <input
                                             type="password"
                                             autocomplete="new-password"
                                             placeholder="Password"
                                             class="input"
                                        />
                                        <button type="button" class="input__button">
                                             {eyeIco}
                                        </button>
                                   </div>
                                   <button type="button" class="button button--icon">
                                        {qrIco}
                                   </button>
                              </div>
                              <div class="welcome__inner-body-button">
                                   <button
                                        class="button button--large button--primary"
                                        type="button"
                                        disabled
                                   >
                                        Unlock
                                   </button>
                              </div>
                         </div>

                         <div class="welcome__inner-footer">
                              <p class="para">
                                   <span>New to Ethereum?</span>
                                   <a href="#" class="link">
                                        Learn more about wallets
                                   </a>
                              </p>
                         </div>
                    </div>
               </div>
          </section>
     );
}
