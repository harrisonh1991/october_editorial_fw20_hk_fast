import React from 'react';
import styles from "../App.module.scss";
import HeroSit from '../components/Hero/Hero_sit';
import ProductShow from "../components/productShow/productShow_sit";
import Image from '../components/Image/image';
import RedirectBannerCta from '../components/Redirect/redirectBannerCta_sit';

import '../App.scss';

const SitMen = () => (
    <>
        <header>
            <HeroSit 
                {...{
                    banner: { 
                        mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804088291375.jpg', 
                        desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804099162350.jpg' 
                    },
                    title: 'The Declassified Guide',
                    content: "Some may quake at the prospect of dropping temperatures and biting winds – but we say bring it on. Play the changing seasons to your advantage by experimenting with layers and contrasting textures for FW20, with double denim and nostalgic fleece topping the charts of winter’s iciest trends. Read ahead for our 5 curated know-hows on building your new urban shield."
                }}
            />
        </header>
        <main className={['landPg', styles.container].join(' ')}>
            <ProductShow 
                banner1={(<Image image={{src: "//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804103147968.jpg"}}/>)}
                title="Workwear Rising" 
                content="Utilitarian looks are hardly new on our radar – and there’s a definite reason why we feature them time and time again. Asides from its obvious merits of functional utility, the workwear “trend” has become a permanent fixture of menswear and womenswear alike, charming wearers with a tangibility that contrasts perfectly to the ever-changing terrain of our urban jungle. From military and tech-wear inspired garb from Alpha Industries to normcore looks by DANTON, the styling possibilities are limitless. "
                banner2={(<Image image={{mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804096286235.jpg', desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804093363867.jpg'}} />)}
                products={{
                    shopUrl: "https://hk.iteshop.com/s_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'A5XLJM7001LXFKHX',
                            brand: 'ALPHA INDUSTRIES',
                            name: 'Multi-pocket light jacket',
                        },
                        {
                            sku: 'CVTVC003JK04FIVX',
                            brand: 'COVERNAT',
                            name: 'Reversible vest',
                        },
                        {
                            sku: 'DNTBG277CORXFNYX',
                            brand: 'DANTON',
                            name: 'Logo shoulder bag',
                        },
                        {
                            sku: 'DICSWM008036FKHX',
                            brand: 'DICKIES',
                            name: 'Logo cargo hoodie',
                        }
                    ]
                }}
            />
            <ProductShow 
                banner1={(<Image image={{src: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804104855185.jpg'}}/>)}
                title="Normcore Nostalgia" 
                content="Previously adopted by avid campers and hikers, fleece has transitioned from a remnant of 90s childhood field trip nostalgia to one of the reigning streetwear trends this season. From full fleece jackets by Champion to classic vests by Danton, the cosy material boasts just the right amount of warmth and much-needed texture to level up your utilitarian street edit. Finish the camping-wear aesthetic on a tough note with cargo pants and hiker boots to match."
                banner2={(<Image image={{mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804086919189.jpg', desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804100384991.jpg'}} />)}
                isBanner2double={1}
                products={{
                    shopUrl: "https://hk.iteshop.com/s_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'CPNSWS7411XXFNYX',
                            brand: 'CHAMPION',
                            name: 'Explorer fleece sweatshirt',
                        },
                        {
                            sku: 'RRGJKM00115XFBDX',
                            brand: 'R.R.G.S',
                            name: 'Logo fleece jacket',
                        },
                        {
                            sku: 'WTHSWMT19132DBLL',
                            brand: 'WILD THINGS',
                            name: 'Logo patch fleece jacket',
                        },
                        {
                            sku: 'DNTVCJD8997XFBKX',
                            brand: 'DANTON',
                            name: 'Logo fleece vest',
                        }
                    ]
                }}
            />
            <ProductShow 
                banner1={(<Image image={{src: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804103612712.jpg'}}/>)}
                title="Total Red-Emption" 
                content="Light up your heart this winter with FW20’s colour of the season: Crimson Flame. While traditional red evokes notions of passion, romance, and danger, this season’s hue commands nothing but power and warmth from the likes of OBEY and THE NORTH FACE. AAPE also makes an appearance with two understated staples, making sure your essentials rotation is all set and ready to go."
                banner2={(<Image image={{mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804094165459.jpg', desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804109709738.jpg'}} />)}
                isBanner2double={1}
                products={{
                    shopUrl: "https://hk.iteshop.com/s_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'O8XSW2470102FRDX',
                            brand: 'OBEY',
                            name: 'Judge hoodie',
                        },
                        {
                            sku: 'TNFJKF0A496UDRDX',
                            brand: 'THE NORTH FACE',
                            name: '95 Retro Denali jacket',
                        },
                        {
                            sku: 'AAPTEM0451XXERDQ',
                            brand: 'Aape',
                            name: 'Aape Universe tee',
                        },
                        {
                            sku: 'KGLHTK3050STCRDX',
                            brand: 'KANGOL',
                            name: 'Bermuda bucket hat',
                        }
                    ]
                }}
            />
            <ProductShow 
                banner1={(<Image image={{src: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804102383070.jpg'}}/>)}
                title="All Squared Up" 
                content="Forget about Grandad’s dusty plaid knit vest and antique checkered polo shirts from the 60s as FW20 sees a revival of traditional patterns into upbeat alternatives to last season’s addictive normcore obsession. Leading the charge is FIVE CM with their playful check panelled jacket, adopting a daring deconstructed effect, whereas BEAUTY & YOUTH MONKEY TIME focuses on a workwear-inspired aesthetic with their timeless check boxy shirt — both of which will have you prepped and primed for the cooler months to come."
                banner2={(<Image image={{mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804096128297.jpg', desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804092322354.jpg'}} />)}
                products={{
                    shopUrl: "https://hk.iteshop.com/s_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: '5CXHTC0401F0FNYX',
                            brand: 'FIVE CM',
                            name: 'Check bucket hat',
                        },
                        {
                            sku: 'IZXJKH7181F0FGRX',
                            brand: 'izzue',
                            name: 'NHIZ check padded jacket',
                        },
                        {
                            sku: '5CXKNV4101F0FBKX',
                            brand: 'FIVE CM',
                            name: 'Checker layered knit sweater',
                        },
                        {
                            sku: 'ROWCDWCD2002FGYX',
                            brand: 'ROMANTIC CROWN',
                            name: 'Checked logo intarsia cardigan',
                        }
                    ]
                }}
            />
            <ProductShow 
                banner1={(<Image image={{src: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804101429721.jpg'}}/>)}
                title="Denim (and more denim)" 
                content="It’s true: denim never really went “out” of style and for the most part has strived in the spotlight of previous seasons with front row seats, but still we felt the need to highlight denim in FW20 for its versatility and innovation, and we’re sure you’ll agree with us. Starting off is CARHARTT WIP with their classic Ruck single knee pants which, frankly speaking, are probably the only pants you’ll ever need, and then we have MUSIUM DIV. combining the infamous duo of denim and bleach splatters for that classic workwear vibe."
                banner2={(<Image image={{mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804090318391.jpg', desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804101337482.jpg'}} />)}
                banner2Index={2}
                isBanner2double={1}
                products={{
                    shopUrl: "https://hk.iteshop.com/s_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'AAPLJM7383XXFBLL',
                            brand: 'Aape',
                            name: 'Camo hood denim jacket',
                        },
                        {
                            sku: 'MMUSTM80157XFBLX',
                            brand: 'MUSIUM DIV.',
                            name: 'Bleach denim shirt',
                        },
                        {
                            sku: 'CHXJNI22948BDBLX',
                            brand: 'CARHARTT WIP',
                            name: 'Ruck Single Knee pants',
                        },
                        {
                            sku: 'HRRBGM081104EBLZ',
                            brand: 'H.R. REMAKE',
                            name: 'Mix Patchwork handbag',
                        }
                    ]
                }}
            />
        </main>
        <footer className={['landPg', styles.container].join(' ')}>
            <RedirectBannerCta 
                media={(<Image image={{mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804090613828.jpg', desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/17/16055804098176043.jpg'}}/> )} 
                cta={{
                    link: '/s_it/landingPage/trend-editorial-w',
                    content: 'Discover The Womenswear Guide'
                }}
            />
        </footer>
    </>
);

export default SitMen;
