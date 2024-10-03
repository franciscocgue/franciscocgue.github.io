import React, { ReactElement } from 'react';
import styles from './Card.module.css';

type CardProps = {
    image: any, 
    title: string,
    bgColor?: string,
    description: ReactElement
}

const Card = ({ image, title, bgColor, description }: CardProps) => {
    return (
        <div className={styles.container}>
            <div style={{background: bgColor}} className={styles['img-container']}>
                <img src={image}></img>
            </div>
            <h3 className={styles['title']}>{title}</h3>
            <div className={styles['description']}>
                {description}
            </div>
        </div>
    )
}

export default Card;