import React from 'react';

export default function ModalQr() {
     return (
          <section className="modal modal--qrcode">
               <div className="modal__inner">
                    <div className="modal__inner-header">
                         <h5 className="h5 h5--thin">
                              Scan QR code with a <br />
                              DeGe compatible wallet
                         </h5>
                         <button type="button" className="modal__inner-header-close"></button>
                    </div>
                    <div className="modal__inner-qr">
                         <img src="images/qr/1.png" alt="qrcode" />
                    </div>
               </div>
          </section>
     );
}
