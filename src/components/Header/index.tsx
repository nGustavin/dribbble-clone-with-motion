/* eslint-disable */
import styles from './styles.module.scss'
import {BiSearchAlt} from 'react-icons/bi'
import {MdWork} from 'react-icons/md'
import { motion } from 'framer-motion'


export const Header: React.FC = () => {
    const variants = {
        hidden: {opacity: 0, x: 0, y: -200},
        enter: {opacity: 1, x: 0, y: 0},
        exit: { opacity: 0, x: 0, y: -100 },
      }

    return(
        <motion.header 
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{type: 'linear'}}
            className={styles.headerContainer}
        >
            <div className={styles.leftSide}>
                <a href="https://dribbble.com">
                    <img src='/images/logo.svg' alt="Dribbble"/>
                </a>
                <ul>
                    {options.map(({title}) => (
                        <li>{title}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.input}>
                    <BiSearchAlt size={24} color="var(--gray-300)"/>
                    <input type="text" placeholder="Search"/>
                </div>
                <div>
                    <MdWork size={28} color="var(--gray-300)"/>
                    <img src="/images/profile.svg" alt="Profile" />
                </div>
                <button>Upload</button>
            </div>
        </motion.header>
    )
}

const options = [
    {
        title: 'Inspiration',
    },
    {
        title: 'Find Work'
    },
    {
        title: 'Learn Design',
    },
    {
        title: 'Go Pro',
    },
    {
        title: 'Hire Designers',
    },
]
