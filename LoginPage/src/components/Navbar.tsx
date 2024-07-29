import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/menu/dashboard" legacyBehavior>
                        <a className={styles.navLink}>
                            <Image src="/image/ball.png" alt="Logo" width={50} height={50} className={styles.logoImage} />
                            SSB Team
                        </a>
                    </Link>
                </div>
                <button className={styles.menuToggle} onClick={toggleMenu}>
                    {isMenuOpen ? '✖' : '☰'}
                </button>
                <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ''}`}>
                    <li className={styles.navItem}>
                        <Link href="/dashboard" legacyBehavior>
                            <a className={styles.navLink}>Dashboard</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/loginPage/login" legacyBehavior>
                            <a className={styles.navLink}>Logout</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
