/* eslint-disable */
import styles from './styles.module.scss'
import Image from 'next/image'
import Logo from '/images/logo.svg'


export const Header: React.FC = () => {
    return(
        <header>
            <div>
                <a href="https://dribbble.com">
                    <img src='/images/logo.svg' alt="Dribbble"/>
                </a>
                <ul>
                    {options.map(({title}) => (
                        <li>{title}</li>
                    ))}
                </ul>
            </div>
            <div>

            </div>
        </header>
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
