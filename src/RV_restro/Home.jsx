import React, { useState } from 'react';
import './Style.css';
import MenuCards from './MenuCards';
import CardsDataAPI from './CardsDataAPI';
import Navbar from './Navbar';
const uniqueList = [
    ...new Set(CardsDataAPI.map((curElem) => {
    return curElem.category;
})
),
"All",
];

const Home = () => {
    const [menuData, setMenuData] = useState(CardsDataAPI);
    const [menuList, setMenuList] = useState(uniqueList);
    const filterItem = (category) => {
        if(category === 'All'){
            setMenuData(CardsDataAPI);
            return;
        }
        const updatedList = CardsDataAPI.filter((curElem) => {
            return curElem.category === category;
        })
        setMenuData(updatedList);
    };
    return (
        <>
            <Navbar filterItem = {filterItem} menuList = {menuList}/>



            <MenuCards menuData={menuData} />
        </>
    );
};

export default Home;
