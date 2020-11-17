import React from 'react';

import styles from './styles/cta_sit.module.scss'

const CtaSit = props => {
    const { content, link } = props;
    return (
        <a className={[styles.cta, styles.cta__sit].join(' ')} href={link}>
            {content}<i className={['iconfont icon-icon_forward_normal', styles.icon, styles.icon_sit ].join(' ')}></i>
        </a>
    );
}

export default CtaSit;