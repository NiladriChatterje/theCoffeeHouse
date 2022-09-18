import './Blog.css'
import { motion } from 'framer-motion';

export default function Blog() {
    return (
        <>
        <motion.div className='contact-container'
       initial={{transform:'translateY(100vh)'}}
       animate={{transform:'translateY(0vh)'}}
       exit={{transform:'translateY(60vh)'}}>
            

        </motion.div>
        </>
    )
}