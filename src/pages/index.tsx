import Head from 'next/head'
import {motion} from 'framer-motion'
import {Card} from '../components/Card'
import { CardData } from './data'
import styles from './home.module.scss'

const Home: React.FC = () => {
  const variants = {
    hidden: {opacity: 0, x: -200, y: 0},
    enter: {opacity: 1, x: 0, y: 0},
    exit: { opacity: 0, x: 0, y: -100 },
  }

  return (
    <>
      <Head>
        <title>NextJS template</title>
      </Head>

      <main
        className={styles.mainContainer}
      >
        <div className={styles.gridcontainer}>
          {CardData.map((cardInfo) => (
            <Card 
              key={cardInfo._id}
              desc={cardInfo.about}
              title={cardInfo.name}
            />
          ))}
        </div>
      </main>
    </>
  )
}


export default Home