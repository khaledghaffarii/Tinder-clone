import React,{useState} from 'react'
import './TinderCard.css'
const TinderCard = () => {
    const[people,setPerson] = useState([
       {
            name:'Elone Masck',
            url:'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg'       
        },
        {
            name:'Jeff Bezos',
            url:'https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg'
        }

    ])

    const swiped = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const outOfFrame = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }

    return (
        <div className="tinderCard">
             <div className="tinderCards__cardContainer">
                {
                    people.map((person) =>(
                        <TinderCard 
                        className="swip" 
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir)=> swiped(dir,person.name) }
                        onCardLeftScreen={() => outOfFrame(person.name)} 
                        >
                             Hello, World!
                        </TinderCard>
                    ))
                }
             </div>
            
        </div>
    )
}

export default TinderCard
