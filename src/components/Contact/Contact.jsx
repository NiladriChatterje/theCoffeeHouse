import './Contact.css';
import { motion } from 'framer-motion';
import Instagram from './instagram.webp';
import Facebook from './facebook.png';
import Whatsapp from './Whatsapp.webp'; 

const socialMedia =[
    {
        img:Instagram,
        name:'Instagram',
        url:'https://www.instagram.com/the_coffee_house_chandannagar/'
    },
    {
        img:Facebook,
        name:'Facebook',
        url:'https://www.facebook.com/thecoffeehousecgr'
    },
    {
        img:Whatsapp,
        name:'Whatsapp',
        url:'https://web.whatsapp.com/send?phone=08697770000&text='
    }
];
export default function Contact() {
    return (
        <>
        <motion.div className='contact-container'
        initial={{transform:'translateY(100vh)'}}
        animate={{transform:'translateY(0vh)'}}
        exit={{transform:'translateY(60vh)'}}>
            <div className='social-media-apps'
            onMouseEnter={()=>{
                Array.from(document.getElementsByClassName('social-name')).map(item=>{
                    item.style.display='flex';
                    return null;
                })
            }}
            onMouseLeave={()=>{
                Array.from(document.getElementsByClassName('social-name')).map(item=>{
                    item.style.display='none';
                    return null;
                })
            }}>
            {
                socialMedia?.map(item =>{
                    return <span 
                    onClick={()=>{
                        window.open(item.url,'_blank');
                    }}
                    >
                        <img src={item.img} alt='' />
                        <span className='social-name'>{item.name}</span>
                    </span>
                })
            }

            <div>
                <div></div>
            </div>
            </div>
        </motion.div>
        </>
    )
}