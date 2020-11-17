import React from 'react';

import styles from './styles/redirectBannerCta_sit.module.scss'
import CtaSit from '../Cta/cta_sit';

const RedirectBannerCtaSit = props => {

    const { cta, media } = props;

    return (
        <section className={styles.container}>
            <div className={styles.media}>
                {media}
            </div>
            <div className={styles.desc}>
                <div className={styles.cta}>
                    <CtaSit link={cta.link} content={cta.content}/>
                </div>
            </div>
        </section>
    );

}

export default RedirectBannerCtaSit;