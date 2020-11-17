import React from 'react';
import Image from '../Image/image.jsx';
import styles from './styles/content_sit.module.scss'; 

const ContentSit = props => {

    const { image, title, content } = props;

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image image={image}/>
            </div>
            <h2 className={styles.title}>
                { title }
            </h2>
            <div className={styles.content}>
                {content}
            </div>
        </div>
    );

}

export default ContentSit;