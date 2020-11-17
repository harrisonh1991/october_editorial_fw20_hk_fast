import React from 'react';
import Image from '../Image/image.jsx';
import styles from './styles/productSwiper_sit.module.scss';

const ProductSwiperSit = props => {

    return (
        <div className={styles.container}>
            {
                getSliderSit(props.products)
            }   
        </div> 
    );

};

const getSliderSit = props => {

    const { shopUrl, imageUrl, imageUrl_end, lists } = props;
    const _lists = [];
    lists.map((item, index) => 
        (
            _lists.push(
                <div key={item + index} className={styles.slider__container}>
                    <a className={styles.slider__link} href={shopUrl + item.sku}>
                        <div className={styles.slider__image}>
                            <Image image={{src: imageUrl + item.sku + '/' + item.sku +imageUrl_end}} /> 
                        </div>
                        <div className={styles.slider__desc}>
                            <p className={styles.slider__string}>{item.brand}</p>
                            <p className={styles.slider__string}>{item.name}</p>
                        </div>
                    </a>
                </div>
            )
        )
    );
        

    return _lists;
}

export default ProductSwiperSit;