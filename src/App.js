import {useState} from 'react'
import logo from './logo.svg';
//import backImage from './img/leather_black.jpg'
import './App.css';
import Item from './components/item/Item';

const DUMMY_DATA = {
  title: 'Сказочное заморское явство',
  food: [
    {
      name: 'Нямушка',
      with: 'с фуа-гра',
      portions: 10,
      mouse: 1,
      weight: 0.5,
      available: true
    },
    {
      name: 'Нямушка',
      with: 'с рыбой',
      portions: 40,
      mouse: 2,
      weight: 2,
      available: true
    }, 
    {
      name: 'Нямушка',
      with: 'с курой',
      portions: 100,
      mouse: 0,
      weight: 5,
      available: false
    }
  ]
}
function App() {
  const [catFoodInfo, setCatFoodInfo] = useState(DUMMY_DATA)
  //fetch data from back end
  const items = catFoodInfo ? <ul className='items'>{catFoodInfo.food.map((foodInfo) => {
    return <Item foodInformation={{...foodInfo}} title={catFoodInfo.title}/>
  }) }</ul> : "Коты негодуют, еда не найдена \ /";
  return (
    <div className="App" style={{ 
      backgroundImage: `url(https://365psd.ru/images/backgrounds/leather_black.jpg)` 
    }}>
      <header className="header">
        <p>Ты сегодня покормил кота?</p>
        <div>
         {items}
        </div>
      </header>
    </div>
  );
}

export default App;
