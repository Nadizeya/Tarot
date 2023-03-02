import React from 'react';
import '../App.css';
import Card from './card';
import carddatas from '../carddatas';


function Row() {

  const [cards, setCard] = React.useState(carddatas.datas)

  function toggle(id) {
        setCard(prevCards => {
            const newCards = []
            for(let i = 0; i < prevCards.length; i++) {
                const currentCard = prevCards[i]
                if(currentCard.id === id) {
                    const updatedCard = {
                        ...currentCard,
                        on: !currentCard.on
                    }
                    newCards.push(updatedCard)
                } else {
                    newCards.push(currentCard)
                }
            }
            return newCards;    
        })  
        
    }

  const  addingcards = cards.map(card => {
    return(
     <Card
      key = {card.id}   
      id= {card.id}
      name= {card.name}
      value= {card.value}
      on= {card.on}
      image = {card.image}
      clickhandler = {toggle}
     />)    
  })

  return (
    <div className="leftHeaderItems">
        {addingcards}
    </div>
  )

};  

export default Row;