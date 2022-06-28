import Card from './Card';
import {languages} from '../data.js'
import '../stylesheets/components/main.scss';
import {nanoid} from 'nanoid';

function Main() {


  return (
    <div className='main'>
      <h1>Languages</h1>
      <div className='cards'>
        {languages.map(language => (
          <Card
            key={nanoid()}
            name={language.name}
            img={language.img}
            options={language.options}
          />
        ))}
      </div>
    </div>
  )
}

export default Main;