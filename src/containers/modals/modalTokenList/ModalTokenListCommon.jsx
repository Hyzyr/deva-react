import React, { useState, useEffect } from 'react';
import Tooltip from 'components/Tooltip';
import LoaderSpinner from 'components/LoaderSpinner';
import { imgFolder } from 'Global';

function ModalTokenListCommon(props) {
     const [commonList, setCommonList] = useState(null);
     useEffect(() => {
          props.commonArr().then((response) => {
               setCommonList(response);
          });
     }, []);
     return (
          <div class="tokenList__common">
               <div class="tokenList__common-title">
                    {props.title}
                    <Tooltip text={'These tokens are commonly paired with other tokens'} />
               </div>
               {commonList === null ? (
                    <LoaderSpinner />
               ) : (
                    <>
                         <div class="tokenList__common-list">
                              {commonList.map((item) => (
                                   <div class="tokenList__common-item">
                                        <div class="tokenList__common-item-avatar">
                                             <img src={imgFolder + item.image} alt="dg" />
                                        </div>
                                        <p class="para">{item.titleShort}</p>
                                   </div>
                              ))}
                         </div>
                    </>
               )}
          </div>
     );
}

export default ModalTokenListCommon;
