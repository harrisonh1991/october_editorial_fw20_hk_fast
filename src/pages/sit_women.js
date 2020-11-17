import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";
import styles from "../App.module.scss";
import HeroSit from '../components/Hero/Hero_sit';
import ProductShow from "../components/productShow/productShow_sit";
import Image from '../components/Image/image';
import RedirectBannerCta from '../components/Redirect/redirectBannerCta_sit';

import '../App.scss';

const SitWomen = () => (
    <article className="App">
        <header>
            <HeroSit 
                {...{
                    banner: { 
                        mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804089264709.jpg', 
                        desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804099259664.jpg' 
                    },
                    title: 'The Declassified Guide',
                    content: "Seasons come and go, and so do trends (well, kind of). FW20 takes a deep dive into the past, revamping old but also on-going trends that we’ve come to love so much over the years and spinning them under a unique light. The season sees a particular revival in the classic Victoriana, along with new age check and plaid, and our undying love for trench coats. If you’re wondering whether you should get attached, well it’s too late because we certainly already have."
                }}
            />
        </header>
        <main className={['landPg', styles.container].join(' ')}>
            <ProductShow 
                banner1={(<Image image={{src: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804104418372.jpg'}}/>)}
                title="Off the Grid" 
                content="Tick your boxes for check and plaid this season as traditional patterns make a return with both statement and minimalistic pieces from brands such as jouetie and BEAMS BOY. From turtleneck sweaters and skirts to stand-out overcoats, bolster your winter ensembles with our curated selection below to make those colder nights that much toastier. "
                banner2={(<Image image={{mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804095187749.jpg', desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804087732769.jpg'}} />)}
                products={{
                    shopUrl: "https://hk.iteshop.com/s_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'JOEKN2600301FPPZ',
                            brand: 'jouetie',
                            name: 'Check knit turtleneck sweater',
                        },
                        {
                            sku: '4BXOC190499XFRDZ',
                            brand: 'BEAMS BOY',
                            name: 'Check overcoat',
                        },
                        {
                            sku: 'RLHJK03JK002FYEX',
                            brand: 'Rocket X Lunch',
                            name: 'Plaid shirt jacket',
                        },
                        {
                            sku: 'RNASKG1000XXFPPZ',
                            brand: 'RNA',
                            name: 'Plaid skirt',
                        }
                    ]
                }}
            />
            <ProductShow 
                banner1={(<Image image={{src: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804102277744.jpg'}}/>)}
                title="P For Patchwork" 
                content="We’re speaking patchwork this season and we’re not talking Grandma’s panelled sweater (though there’s absolutely nothing wrong with that). Piece together deconstructed elements from FREE PEOPLE with their patchwork denim skirt and revamped classics from New Era with their New York Yankees patchwork cap — both of which are sure to spice up this winter’s ensemble."
                banner2={(<Image image={{mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804090168781.jpg', desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804101408687.jpg'}} />)}
                isBanner2double={1}
                products={{
                    shopUrl: "https://hk.iteshop.com/s_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'FPPSKOB12095FBLX',
                            brand: 'FREE PEOPLE',
                            name: 'Patchwork denim skirt',
                        },
                        {
                            sku: '4BXST111417XFBKZ',
                            brand: 'BEAMS BOY',
                            name: 'Patchwork shirt',
                        },
                        {
                            sku: 'NERCP2286403DMLX',
                            brand: 'New Era',
                            name: 'New York Yankees patchwork cap',
                        },
                        {
                            sku: 'AXXSKDE1007XBGRX',
                            brand: 'AS KNOW AS',
                            name: 'Tribal patchwork drawstring skirt',
                        }
                    ]
                }}
            />
            <ProductShow 
                banner1={(<Image image={{src: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804102636155.jpg'}}/>)}
                title="Edwardian Romance" 
                content="Sweeping dresses, ruffled collars and intricate lace detailing – the hallmarks of a lost Victorian era – or is it? For this trend, the elegant mid 18th century aesthetic returns in a new light, in the form of exaggerated puff sleeves, ruffle trim detailing and ruched bodices. Take this delicate puff sleeve dress by GHOSPELL or a lighthearted gingham ruffle trim dress by SISTER JANE. While the grandeur may be dialed down, the effortlessly feminine sensibilities are dialed way up."
                banner2={(<Image image={{mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804093973237.jpg', desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804109146629.jpg'}} />)}
                isBanner2double={1}
                products={{
                    shopUrl: "https://hk.iteshop.com/s_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'GSPDSDRG384BFIVX',
                            brand: 'GHOSPELL',
                            name: 'Ruched dress',
                        },
                        {
                            sku: 'SSJDSDR1259BFBLX',
                            brand: 'SISTER JANE',
                            name: 'Ruffle trim dress',
                        },
                        {
                            sku: 'GSPTPTOG236YFYEX',
                            brand: 'GHOSPELL',
                            name: 'Ruched top',
                        },
                        {
                            sku: 'AMOTP03TS002FBKX',
                            brand: 'AMONG',
                            name: 'Lettuce trim top',
                        }
                    ]
                }}
            />
            <ProductShow 
                banner1={(<Image image={{src: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804104418372.jpg'}}/>)}
                title="Collegiate Cool" 
                content="As our reliance on comfortable, yet smart attire grows larger with every Zoom meeting, we can turn towards the original icons of preppy comfort - campus style. With versatility and aesthetics at its peak, reach for a structured blazer from Beauty & Youth for a conference-ready look, or layer up with a knit vest and a pleated skirt for a playful touch. Complete the look with classic white sneakers by Fred Perry - because when it comes to varsity-inspired fits, school’s always in session - and you’re at the top of the class."
                banner2={(<Image image={{mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804095541626.jpg', desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804092226917.jpg'}} />)}
                products={{
                    shopUrl: "https://hk.iteshop.com/s_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'BYUJKW090517FNYX',
                            brand: 'BEAUTY & YOUTH',
                            name: 'Basic blazer',
                        },
                        {
                            sku: 'B1XKNL4595XFFNYL',
                            brand: ':CHOCOOLATE',
                            name: 'Badge knit vest',
                        },
                        {
                            sku: 'CABSK1107F0MFYED',
                            brand: 'CCAABB',
                            name: 'Pleated skirt',
                        },
                        {
                            sku: 'FPXSHB6202XXFWHX',
                            brand: 'Fred Perry',
                            name: 'B722 sneakers',
                        }
                    ]
                }}
            />
            <ProductShow 
                banner1={(<Image image={{src: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804103578215.jpg'}}/>)}
                title="Trending Trenches" 
                content="There’s something about the clean draping, structured lapels and iconic beige hue that makes this ageless silhouette so irresistible. With the most uncanny ability to elevate the most basic of knits, tees and dresses, it’s no wonder this is a rare piece that sits in the front of our closet – and stays there. This season, take a break from the classic look with a range of remixed coats panelled and pleated to perfection, with chic renditions from brands like MURUA and BEAMS. A pop of colour rests easy on the eyes, especially during the gloomiest of winter nights."
                banner2={(<Image image={{mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804091672181.jpg', desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804109046447.jpg'}} />)}
                isBanner2double={1}
                products={{
                    shopUrl: "https://hk.iteshop.com/s_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'BCXLJ0F1240SFGRD',
                            brand: 'b+ab',
                            name: 'Basic trench coat',
                        },
                        {
                            sku: 'MUROC5000080FBGX',
                            brand: 'MURUA',
                            name: 'Belted panel trench coat',
                        },
                        {
                            sku: 'MURJK0000101EKHX',
                            brand: 'MURUA',
                            name: 'Contrast pleated trench coat',
                        },
                        {
                            sku: '4RBOC190226XEBLX',
                            brand: 'RAY BEAMS',
                            name: 'Self tie trench coat',
                        }
                    ]
                }}
            />
        </main>
        <footer className={['landPg', styles.container].join(' ')}>
            <RedirectBannerCta 
                media={(<Image image={{mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804094796412.jpg', desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804086062785.jpg'}}/> )} 
                cta={{
                    link: '/s_it/landingPage/trend-editorial-m',
                    content: 'DISCOVER NOW'
                }}
            />
        </footer>
    </article>
);

export default SitWomen;
