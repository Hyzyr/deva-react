import React, { useState } from 'react';
import ManageTokenLists from './manageToken/ManageTokenLists';
import ManageTokenToken from './manageToken/ManageTokenToken';

export default function ModalManageToken() {
     const [tab, setTab] = useState('LISTS');

     return (
          <div className="modal__inner-body">
               <div className="tokenManage">
                    {tab === 'TOKEN' ? (
                         <div className="tokenManage__tip para">
                              Tip: Custom tokens are stored locally in your browser
                         </div>
                    ) : (
                         ''
                    )}
                    <div className="tokenManage__nav nav">
                         <div
                              className={`nav__link ${tab === 'LISTS' ? 'active' : ''}`}
                              onClick={() => setTab('LISTS')}
                         >Lists</div>
                         <div
                              className={`nav__link ${tab === 'TOKEN' ? 'active' : ''}`}
                              onClick={() => setTab('TOKEN')}
                         >Token</div>
                    </div>
                    {tab === 'LISTS' ? <ManageTokenLists /> : <ManageTokenToken />}
               </div>
          </div>
     );
}
