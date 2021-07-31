import React from 'react';

import {Card} from '../Card/Card';
import './cardlist.css';

export const Cardlist = (props) => {
    
     return(
         <div className="cardList">{
            props.monsters.map(monster => (
                <Card key={monster.id} monster={monster} />
            ))
         }
           
        </div>
     )  
        
};