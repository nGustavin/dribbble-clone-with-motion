/*eslint-disable */
import { motion } from 'framer-motion'
import styles from './styles.module.scss'

interface CardProps {
    title: string;
    desc: string;
}

export const Card: React.FC<CardProps> = ({desc, title}) => {
    const variants = {
        hidden: {opacity: 0, x: -200, y: 0},
        enter: {opacity: 1, x: 0, y: 0},
        exit: {opacity: 0, x: 0, y: -300},
      }

    return(
        <motion.main 
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{type: 'spring', velocity: 50}}
            className={styles.cardContainer}
            whileHover={{height: '14rem', width: '34rem',cursor: 'pointer'}}
            whileTap={{scale: 0.9}}
        >
            <img src="/images/profile.svg" alt="person" />
            <div>
            <h1>{title}</h1>
            <p>
                {desc}
            </p>
            </div>
        </motion.main>
    )
}