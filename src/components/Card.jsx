import {useState} from 'react';
import '../stylesheets/components/card.scss';
import {nanoid} from 'nanoid';

function Card(props) {
    const {name, img, options} = props;
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        setTimeout(() => {
            setIsOpen(!isOpen)
        } , 250);

        e.target.closest('div.card').style.transform = isOpen ? 'rotateY(0deg)' : 'rotateY(180deg)';
        e.target.closest('div.card').style.transition = 'transform 0.8s';
    }

    return (
        <div className='card' onMouseUp={handleClick}>
            <div className='header' style={isOpen ? {display: "none"} : {display: "block"}}>
                <img src={img} alt={name}/>
                <h2>{name}</h2>
            </div>
            <ul className='desc' style={!isOpen ? {display: "none"} : {display: "block"}}>
                {options.map(option => (
                    <li key={nanoid()}>{option}</li>
                ))}
            </ul>
        </div>
    );
  }
  
  export default Card;