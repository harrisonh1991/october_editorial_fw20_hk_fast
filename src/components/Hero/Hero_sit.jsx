import React from 'react';
import styles from './styles/hero_sit.module.scss';
import Image from '../Image/image';
import ContentSit from '../Content/content_sit';

const HeroSit = props => {

    const { banner, title, content } = props;

    return (
        <div className={styles.container}>
            <Image {...{image: banner}} />
            <ContentSit {...{
                title: title, 
                content: content
            }}/>
        </div>
    );

}

export default HeroSit;