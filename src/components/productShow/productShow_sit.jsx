import React from 'react';
import styles from './styles/productShow_sit.module.scss';
import Content2Sit from '../Content/content2_sit';
import ProductSwiperSit from '../swiper/productSwiper_sit';

const ProductShow_Sit = props => {

    const { title, content, banner1, banner2, products, isBanner2double} = props;

    var banner2classNames = (isBanner2double)? styles.bannerDB: null;

    return (
        <div className={styles.container}>
            <div className={styles.banner1}>
                {banner1}
            </div>
            <Content2Sit title={title} content={content} />
            <div className={[styles.banner2, banner2classNames].join(' ')}>
                {banner2}
            </div>
            <ProductSwiperSit products={products}/>
        </div>
    );

}

export default ProductShow_Sit;