import styles from '../styles/Navbar.module.scss'
import logo from '../public/imgs/logo.png'
import Image from 'next/image'
import Link from 'next/link'

function NavBar() {
  return (
    <header className={styles.header} style={{marginRight: 'auto'}}>
        <div className={styles.logo}>
            <Image src={logo} className={styles} alt="logo"></Image>
        </div>
      
      <nav className={styles.nav}>
        <ul className={styles.nav__links}>
          <li>
            <Link href="/">
              <a>Services</a>
            </Link>
            
          </li>
          <li>
            <Link href="https://github.com/leomachadods?tab=repositories">
              <a>Projects</a>
            </Link>
            
          </li>
          <li>
            <Link href="/sobre">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Link href="https://github.com/leomachadods/">
        <a className={styles.cta}>
        <button>Contact</button>
      </a>
      </Link>
    </header>
  );
}

export default NavBar;
