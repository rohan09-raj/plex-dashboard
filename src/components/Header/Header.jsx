import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header__container}>
            <h1 className={styles.header__title}>Plex Dashboard</h1>
        </div>
    )
}

export default Header