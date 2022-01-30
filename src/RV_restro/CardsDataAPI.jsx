import React from 'react';
import bf_1 from '../Resto_Image/bf-1.jpg';
import bf_2 from '../Resto_Image/bf-2.png';
import bf_3 from '../Resto_Image/bf-3.png';
import bf_4 from '../Resto_Image/bf-4.jpg';
import bf_5 from '../Resto_Image/bf-5.jpg';
import dinner_1 from '../Resto_Image/dinner-1.png';
import dinner_2 from '../Resto_Image/dinner-2.jpg';
import dinner_3 from '../Resto_Image/dinner-3.png';
import dinner_4 from '../Resto_Image/dinner-4.jpg';
import drink_1 from '../Resto_Image/drink-1.png';
import drink_2 from '../Resto_Image/drink-2.png';
import drink_3 from '../Resto_Image/drink-3.png';
import drink_4 from '../Resto_Image/drink-4.jpg';
import drink_5 from '../Resto_Image/drink-5.png';
import lunch_1 from '../Resto_Image/lunch.jpg';
import lunch_2 from '../Resto_Image/lunch-2.jpg';
import lunch_3 from '../Resto_Image/lunch-3.png';
import lunch_4 from '../Resto_Image/lunch-4.png';
import lunch_5 from '../Resto_Image/lunch-5.jpg';
const CardsDataAPI = [
    {
        id : 1,
        img : bf_1,
        title : 'Bread Omlette',
        category : 'breakfast',
        price : '5$',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias exercitationem voluptatibus repellendus laborum modi fuga enim. Maiores nihil iusto repellendus nostrum, explicabo itaque voluptates harum ad, suscipit ipsam deserunt at temporibus.'
    },
    {
        id : 2,
        img : bf_2,
        title : 'Fried Bread',
        category : 'breakfast',
        price : '6$',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias exercitationem voluptatibus repellendus laborum modi fuga enim. Maiores nihil iusto repellendus nostrum, explicabo itaque voluptates harum ad, suscipit ipsam deserunt at temporibus.'
    },
    {
        id : 3,
        img : bf_3,
        title : 'Dosa Idli',
        category : 'breakfast',
        price : '8$',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias exercitationem voluptatibus repellendus laborum modi fuga enim. Maiores nihil iusto repellendus nostrum, explicabo itaque voluptates harum ad, suscipit ipsam deserunt at temporibus.'
    },
    {
        id : 4,
        img : bf_4,
        title : 'Paneer Roll',
        category : 'breakfast',
        price : '7$',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias exercitationem voluptatibus repellendus laborum modi fuga enim. Maiores nihil iusto repellendus nostrum, explicabo itaque voluptates harum ad, suscipit ipsam deserunt at temporibus.'
    },
    {
        id : 5,
        img : bf_5,
        title : 'Sambhar Dosa',
        category : 'breakfast',
        price : '12$',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias exercitationem voluptatibus repellendus laborum modi fuga enim. Maiores nihil iusto repellendus nostrum, explicabo itaque voluptates harum ad, suscipit ipsam deserunt at temporibus.'
    },
    {
        id : 1,
        img : dinner_1,
        title : 'Matar Paneer',
        category : 'dinner',
        price : '12$',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias exercitationem voluptatibus repellendus laborum modi fuga enim. Maiores nihil iusto repellendus nostrum, explicabo itaque voluptates harum ad, suscipit ipsam deserunt at temporibus.'
    },
    {
        id : 2,
        img : dinner_2,
        title : 'Delicious Chicken',
        category : 'dinner',
        price : '12$',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias exercitationem voluptatibus repellendus laborum modi fuga enim. Maiores nihil iusto repellendus nostrum, explicabo itaque voluptates harum ad, suscipit ipsam deserunt at temporibus.'
    },
    {
        id : 3,
        img : dinner_3,
        title : 'Jira Chawal With Kadhi',
        category : 'dinner',
        price : '12$',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias exercitationem voluptatibus repellendus laborum modi fuga enim. Maiores nihil iusto repellendus nostrum, explicabo itaque voluptates harum ad, suscipit ipsam deserunt at temporibus.'
    },
    {
        id : 4,
        img : dinner_4,
        title : 'Roti Kadhi',
        category : 'dinner',
        price : '12$',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias exercitationem voluptatibus repellendus laborum modi fuga enim. Maiores nihil iusto repellendus nostrum, explicabo itaque voluptates harum ad, suscipit ipsam deserunt at temporibus.'
    },
    {
        id : 1,
        img : drink_5,
        title : 'Monester Black',
        category : 'drink',
        price : '22$',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias exercitationem voluptatibus repellendus laborum modi fuga enim. Maiores nihil iusto repellendus nostrum, explicabo itaque voluptates harum ad, suscipit ipsam deserunt at temporibus.'
    },
    {
        id : 2,
        img : drink_2,
        title : 'Burn Black',
        category : 'drink',
        price : '22$',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias exercitationem voluptatibus repellendus laborum modi fuga enim. Maiores nihil iusto repellendus nostrum, explicabo itaque voluptates harum ad, suscipit ipsam deserunt at temporibus.'
    },
    {
        id : 3,
        img : drink_3,
        title : 'Dark Blue',
        category : 'drink',
        price : '22$',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias exercitationem voluptatibus repellendus laborum modi fuga enim. Maiores nihil iusto repellendus nostrum, explicabo itaque voluptates harum ad, suscipit ipsam deserunt at temporibus.'
    },
    {
        id : 4,
        img : drink_4,
        title : 'Tiger Blue',
        category : 'drink',
        price : '22$',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias exercitationem voluptatibus repellendus laborum modi fuga enim. Maiores nihil iusto repellendus nostrum, explicabo itaque voluptates harum ad, suscipit ipsam deserunt at temporibus.'
    },
    {
        id : 5,
        img : drink_1,
        title : 'Nos Blue',
        category : 'drink',
        price : '22$',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias exercitationem voluptatibus repellendus laborum modi fuga enim. Maiores nihil iusto repellendus nostrum, explicabo itaque voluptates harum ad, suscipit ipsam deserunt at temporibus.'
    },
    {
        id : 1,
        img : lunch_1,
        title : 'Chawal Dahi',
        category : 'Lunch',
        price : '13$',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias exercitationem voluptatibus repellendus laborum modi fuga enim. Maiores nihil iusto repellendus nostrum, explicabo itaque voluptates harum ad, suscipit ipsam deserunt at temporibus.'
    },
    {
        id : 2,
        img : lunch_2,
        title : 'jeera Chawal With Chicken',
        category : 'Lunch',
        price : '13$',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias exercitationem voluptatibus repellendus laborum modi fuga enim. Maiores nihil iusto repellendus nostrum, explicabo itaque voluptates harum ad, suscipit ipsam deserunt at temporibus.'
    },
    {
        id : 3,
        img : lunch_3,
        title : 'Slad Set',
        category : 'Lunch',
        price : '13$',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias exercitationem voluptatibus repellendus laborum modi fuga enim. Maiores nihil iusto repellendus nostrum, explicabo itaque voluptates harum ad, suscipit ipsam deserunt at temporibus.'
    },
    {
        id : 4,
        img : lunch_4,
        title : 'Fried Meat',
        category : 'Lunch',
        price : '13$',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias exercitationem voluptatibus repellendus laborum modi fuga enim. Maiores nihil iusto repellendus nostrum, explicabo itaque voluptates harum ad, suscipit ipsam deserunt at temporibus.'
    },
    {
        id : 5,
        img : lunch_5,
        title : 'Fried Chawal Kadhi',
        category : 'Lunch',
        price : '13$',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias exercitationem voluptatibus repellendus laborum modi fuga enim. Maiores nihil iusto repellendus nostrum, explicabo itaque voluptates harum ad, suscipit ipsam deserunt at temporibus.'
    },
]

export default CardsDataAPI;
