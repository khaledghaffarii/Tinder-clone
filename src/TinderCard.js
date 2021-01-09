import React,{useState,useEffect} from 'react'
import TinderCards from 'react-tinder-card'
import './TinderCard.css'
import axios from './axios';
const TinderCard = () => {
    const[people,setPeople] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            
           const res = await axios.get('/tinder/cards')
           console.log(res.data)
            setPeople(res.data);
        }
        fetchData();
    }, [] )

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
                        <TinderCards 
                        className="swipe" 
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir)=> swiped(dir,person.name) }
                        onCardLeftScreen={() => outOfFrame(person.name)} 
                        >
                            
                             <div
                             style={{ backgroundImage : `url(${person.imgUrl})` }}
                             className="card"
                             >
                             <h3> {person.name} </h3>
                             </div>
                        </TinderCards>
                    ))
                }
             </div>
            
        </div>
    )
}

export default TinderCard
