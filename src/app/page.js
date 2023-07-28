import Link from 'next/link'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faUser, faUsers , faKey, faLock, faCartArrowDown, faCreditCard, faRightFromBracket, faCashRegister, faScrewdriverWrench, faDragon, faSkull } from '@fortawesome/free-solid-svg-icons'

import Login from '@/components/Login'

export default function Home() {
  return (
    <main>
      HOLA
      <Link className={styles.link} href={"https://www.google.cl"} target='_blanck'>CLICK</Link>
      <Login></Login>
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faUser} color='blue'/>
        <FontAwesomeIcon icon={faUsers} color='blue'/>
        <FontAwesomeIcon icon={faKey} color='pink'/>
        <FontAwesomeIcon icon={faLock} color='red'/>
        <FontAwesomeIcon icon={faCartArrowDown} />
        <FontAwesomeIcon icon={faCreditCard} />
        <FontAwesomeIcon icon={faRightFromBracket} />
        <FontAwesomeIcon icon={faCashRegister} />
        <FontAwesomeIcon icon={faScrewdriverWrench} />
        <FontAwesomeIcon icon={faDragon} />
        <FontAwesomeIcon icon={faSkull} />
      </div>
    </main>
  )
}
