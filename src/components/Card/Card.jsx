import React from 'react'
import styles from './Card.module.css'

const Card = ({ img, title, url }) => {

    const handleClick = () => {
        window.open(url, "_blank");
    }
    return (
        <div className={styles.card__container} onClick={handleClick}>
            <img className={styles.card__img} src={img} alt="" />
            <h3 className={styles.card__title}>{title}</h3>
        </div>
    )
}

export default Card