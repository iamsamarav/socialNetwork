import styles from './Header.module.css'
import socialLogo from '../../assets/socialLogo.svg'

export function Header() {
    return(
        <header className={styles.header}>
            <img src={socialLogo} alt="Logo of social network" />
            <strong>Social Feed</strong>
        </header>
    )
}