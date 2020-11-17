import React from 'react';
import styles from './styles/content2_sit.module.scss';

const Content2Sit = props => {

    const { title, content } = props;

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {title}
            </h2>
            <div className={styles.content}>
                {content}
            </div>
        </div>
    );

}

export default Content2Sit;