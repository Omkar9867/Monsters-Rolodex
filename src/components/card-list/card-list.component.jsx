import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div> 
);
/* la función que crea los card, coloca el array en cada card y la lista de card lo agrupa en las 4 columnas de la página web  */
