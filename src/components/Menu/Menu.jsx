import './Menu.css';
import { motion } from 'framer-motion';
import {Beverages,sandwich,Pizza,combo_offers,
    Pasta,club_sandwich,Burger,Mocktails,
    Mojito,Lassi,Starters,MilkShakes} from './menulist.js';

const menuCategories =['Beverages','Sandwich','Pizza','combo-offers',
    'Pasta','club-sandwich','Burger','Mocktails',
    'Mojito','Lassi','Starters','Milkshakes'];

export function Menu() {
    return (
        <>
            <motion.div className='Menu-container'
           initial={{transform:'translateY(100vh)'}}
           animate={{transform:'translateY(0vh)'}}
           exit={{transform:'translateY(60vh)'}}>

            <div className='Quick-page-jumps'>
            {menuCategories?.map(item => <span
                                    onClick={()=>window.location.href=`#${item}`}>{item}</span>)}
            </div>

            <span id='Beverages'><u>Beverages</u></span>
            {Beverages.map(item =>{
                return (
                    <div>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </div>
                );
            })}
             <span id='Milkshakes'><u>MilkShakes</u></span>
            {MilkShakes.map(item =>{
                return (
                    <div>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </div>
                );
            })}
             <span id='Lassi'><u>Lassi</u></span>
            {Lassi.map(item =>{
                return (
                    <div>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </div>
                );
            })}
             <span id='Mocktails'><u>Mocktails</u></span>
            {Mocktails.map(item =>{
                return (
                    <div>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </div>
                );
            })}
             <span id='Mojito'><u>Mojito</u></span>
            {Mojito.map(item =>{
                return (
                    <div>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </div>
                );
            })}
             <span id='Starters'><u>Starters</u></span>
            {Starters.map(item =>{
                return (
                    <div>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </div>
                );
            })}
             <span id='Pasta'><u>Pasta</u></span>
            {Pasta.map(item =>{
                return (
                    <div>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </div>
                );
            })}
             <span id='Burger'><u>Burger</u></span>
            {Burger.map(item =>{
                return (
                    <div>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </div>
                );
            })}
            <span id='Sandwich'><u>Sandwich</u></span>
            {sandwich.map(item =>{
                return (
                    <div>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </div>
                );
            })}
            <span id='club-sandwich'><u>Club Sandwich</u></span>
            {club_sandwich.map(item =>{
                return (
                    <div>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </div>
                );
            })}
            <span id='Pizza'><u>Pizza</u></span>
            {Pizza.map(item =>{
                return (
                    <div>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </div>
                );
            })}
             <span id='combo-offers'><u>combo Offers</u></span>
            {combo_offers.map(item =>{
                return (
                    <div>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </div>
                );
            })}
             <span></span>
            </motion.div>
        </>
    );
}