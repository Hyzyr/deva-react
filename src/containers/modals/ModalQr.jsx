import React from 'react';
import { imgFolder } from 'Global';
export default function ModalQr() {
     return (
          <div className="modal__inner-qr">
               <img src={imgFolder + "qr/1.png"} alt="qrcode" />
          </div>
     );
}
