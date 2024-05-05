import React,{createContext,useContext,useState} from 'react';
import './App.css';
import image1 from './Assets/watch.jpg';
import image2 from './Assets/watch2.jpg';
import image3 from './Assets/watch1.jpg';
import image4 from './Assets/watch3.jpg';

const ThemeContext=createContext();

const useTheme= ()=>useContext (ThemeContext);


function App() {
const [darkMode,setDarkMode]=useState(false);

const toggle= ()=>{
  setDarkMode(!darkMode);
}
 

  return (

    <ThemeContext.Provider value={darkMode ? 'dark':'light'}>
    <div className={`App ${darkMode ? 'dark':'light'}`}>
      <div className='shop'>
      <h1>Shopping</h1>
      <button className='themeMode' onClick={toggle} >{darkMode ? 'Light-Mode':'Dark-Mode' }</button>
      </div>
      <div className="container1">
        <div className="shopping">
          <img src={image1} alt="Watch 1" className="Watch-image" />
          <div className="watch-details">
            <h2 className="name">Samsung watch</h2>
            <p className="price">10,000 RS</p>
            <button  className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
        <div className="shopping">
          <img src={image2} alt="Watch 2" className="Watch-image" />
          <div className="watch-details">
            <h2 className="name">Noise Watch</h2>
            <p className="price">6000 RS</p>
            <button  className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
        <div className="shopping">
          <img src={image3} alt="Watch 3" className="Watch-image" />
          <div className="watch-details">
            <h2 className="name">Noise Watch</h2>
            <p className="price">60,000 RS</p>
            <button  className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
        <div className="shopping">
          <img src={image4} alt="Watch 4" className="Watch-image" />
          <div className="watch-details">
            <h2 className="name">Noise Watch</h2>
            <p className="price">2000 RS</p>
            <button  className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;