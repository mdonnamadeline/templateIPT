import React, { useState, useEffect } from 'react';
import './Menu.css'; 
import NavBar from "./NavBar";

function Menu() {
  const [menu, setMenu] = useState([]);

  const fetchMenu = async () => {
    try {
      const response = await fetch('http://localhost:1337/get-menu');
      const data = await response.json();
      setMenu(data.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);


  return (
    <div className='menu'>
        <NavBar />
    <div className="menu-main">
      <h1 className="menu-Title">Menu</h1>
      <div className="image-container">
        {menu.map((dish, index) => (
          <div key={index} className="image-item">
            <img src={`data:image/jpeg;base64,${dish.image}`} alt={dish.name} />
            <div className="image-text">{dish.name}</div>
            <div className="image-text">₱ {dish.price}</div>
            <div className="image-text">{dish.description}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Menu;
