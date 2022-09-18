import singlebean from '../../singlebean.png';
import './Singlebean.css'

export default function SingleBean(){
    return (
        <>
        <img className='parallax' id='p1'  src={singlebean} alt='' />
        <img className='parallax' id='p2'  src={singlebean} alt='' />
        <img className='parallax' id='p3'  src={singlebean} alt='' />
        <img className='parallax' id='p4'  src={singlebean} alt='' />
        <img className='parallax' id='p5'  src={singlebean} alt='' />
        <img className='parallax' id='p6'  src={singlebean} alt='' />
        </>
    )
}