import React, { useState } from 'react';
import { Select, SelectItem, SelectSelected } from './Select';
import { imgFolder } from 'Global';

export default function SelectCoins(props) {
     const [selectedID, setSelectedID] = useState(props.selected);
     const selected = props.coins.find((item) => item.id === selectedID);
     const setSelected = (id) => {
          setSelectedID(id);
          props.setCurrency(id);
     };
     
     return (
          <Select
               selected={
                    <SelectSelected>
                         <div className="avatar">
                              <img src={imgFolder + selected?.image} alt="eth" />
                         </div>
                         <div className="title">{selected?.titleShort}</div>
                    </SelectSelected>
               }
          >
               {props.coins.map((item) =>
                    selectedID !== item.id ? (
                         <SelectItem key={item.id} clickFunc={() => setSelected(item.id)}>
                              <div className="avatar">
                                   <img src={imgFolder + item.image} alt="eth" />
                              </div>
                              <div className="title">{item.titleShort}</div>
                         </SelectItem>
                    ) : (
                         ''
                    )
               )}
          </Select>
     );
}
