import React from 'react';
import Cards from './Home';
const MenuCards = ({ menuData }) => {
    return (
        <>

           <div className="container mt-4">
           <div className="card-container">
                {menuData.map((curElem) => {
                    const {id,title,price,desc,img} = curElem
                    return (
                        <>
                           <div className="menu-cards" key={id}>
                               <img src={img} alt="" className='img-fluid '/>
                               <h2>{title}</h2>
                               <h4>{price}</h4>
                               <p>{desc}</p>
                               <button className="btn">Order Now</button>
                           </div>
                        </>
                    );
                })}
            </div>
           </div>

        </>
    );
};

export default MenuCards;
