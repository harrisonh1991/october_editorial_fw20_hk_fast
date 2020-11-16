import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";
import Hero from '../components/Hero/Hero.jsx';
import ProductShow from "../components/productShow/productShow.jsx";
import Image from '../components/Image/image.jsx';
import RedirectBannerCta from '../components/Redirect/redirectBannerCta.jsx';
import {ShopAll} from '../components/shopAll/shopAll.jsx';

const App = () => (
    <article className="App">
        <Hero 
            banner={<Image image={{ mobile: "//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967566866908.jpg", desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967566252739.jpg'}}/>}
            title={'The Sartorial Escape'}
            content="The shedding of autumn leaves mark a time of great fluidity and change, but the fashion landscape for FW20 conversely sees a graceful return to the reliable, timeless trends of decades past. This winter, dive into an ode to classics – but with a modern twist. From traditional autumn prints to dark romantic Victoriana, discover our selection of the season’s coolest womenswear looks."
        />
        <main className="main">
            <ProductShow 
                title="Infinite Utility" 
                content="It’s nothing new — utilitarian elements have been at the forefront of fashion for longer than we can remember, but for FW20, utility takes a step up through a less intimidating lens by combining a graceful balance of function and contemporary tailoring. Introducing LA-based label STAMPD with their harness strap vest bomber jacket and ENGINEERED GARMENTS with their staple multi-pocket cargo pants. For the more daring, _JULIUS opts for a gas mask-inspired aesthetic with their distressed textured cargo pants, chiming in to the avant-garde."
                scrollMagicItems={[{
                    triggerElement: 'sm1_1',
                    children:(<Image image={{mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967580591254.jpg', desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/1605496757704170.jpg'}}/>),
                    from: {rotation:3, marginLeft:10, marginRight: 10},
                    to: {rotation:0},
                    duration: '300'
                },
                {
                    triggerElement: 'sm1_2',
                    children:(<Image image={{mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/1605496758542892.jpg', desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967584142600.jpg'}}/>),
                    from: {rotation:10, marginLeft:10, marginRight: 10},
                    to: {rotation:0},
                    duration: '300'
                }]}
                photosTags={['STONE ISLAND']}
                triggerHook="onLeave"
                products={{
                    shopUrl: "https://cn.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'JUUOC839P61MFSVX',
                            name: '饰口袋连帽风衣',
                            brand: 'JUUN.J',
                        },
                        {
                            sku: 'QJXJK601933MFBKX',
                            name: '饰扣带多口袋设计夹克',
                            brand: 'MCQ',
                        },
                        {
                            sku: 'OFWJKPAJK10MCBKX',
                            name: 'Logo 缝饰配口袋夹克',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                        },
                        {
                            sku: 'LAVVCTAW202MFGRX',
                            name: '口袋装饰绗缝马甲',
                            brand: 'LAVENHAM',
                        }
                    ]
                }}
            />
            <ProductShow 
                title="(Not So) Cordial Cardigans" 
                content="Cardigans. The mere utterance of the word conjures up visions of plain, beige cable knits or dated argyle prints in your grandmother’s wardrobe. Generally thrown over everyday looks as a boost of warmth, we’re here to say there’s more to it than just a lazy lounge favourite. The key to mastering the look is statement prints – and lots of it. Whether it’s a heritage knit by BAPE BLACK or an eclectic intarsia print by NEEDLES, try yours in deep muted winter hues and finish with neutral trousers to let the real star shine."
                scrollMagicItems={[{
                    triggerElement: 'sm2_1',
                    children:(<Image image={{ desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967586933461.jpg', mobile:'//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967588728011.jpg'}}/>),
                    from: {rotation:3, marginLeft:10, marginRight: 10},
                    to: {rotation:0},
                    duration: 300,
                },
                {
                    triggerElement: 'sm2_2',
                    children:(<Image image={{ desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967590191225.jpg', mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967592108214.jpg'}}/>),
                    from: {rotation:-10, marginLeft:10, marginRight: 10},
                    to: {rotation:0},
                    duration: 300,
                }]}
                photosTags={['TOGA ARCHIVES', 'COMME DES GARÇONS HOMME PLUS']}
                products={{
                    shopUrl: "https://cn.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'OFWCDSR0816MFBGX',
                            name: '饰飘带针织开衫',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                        },
                        {
                            sku: 'CPXCDAZN058X7NYX',
                            name: '爱心缝饰开衫',
                            brand: 'Play Comme des Garçons',
                        },
                        {
                            sku: 'ANXCD0092KAMEORX',
                            name: '系扣针织开衫',
                            brand: 'Acne Studios',
                        },
                        {
                            sku: 'QJXCD603760MFBLZ',
                            name: '花朵嵌花针织开衫',
                            brand: 'MCQ',
                        }
                    ]
                }}
            />
            <ProductShow 
                title="New-Age Check & Plaid" 
                content="Oftentimes, traditional patterns such as check and plaid can give off the wrong notions of being too mature, and in most cases, a little boring, but this season proves why we should all be taking up the classic squares. Introducing the forerunners of new-age check and plaid: JUNYA WATANABE and PALM ANGELS with revised favourites such as panelled shirts and track jackets, as well as Mihara Yasuhiro with their hallmark deconstructed aesthetic."

                scrollMagicItems={[{
                    triggerElement: 'sm3_1',
                    children:(<Image hideMobile={1} image={{ src: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967592912352.jpg'}}/>),
                    from: {rotation:10, marginLeft:10, marginRight: 10},
                    to: {rotation:0},
                    duration: 300
                },
                {
                    triggerElement: 'sm3_2',
                    children:(<Image image={{ desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967595652552.jpg', mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/1605496759492839.jpg'}}/>),
                    from: {rotation:20, marginLeft:10, marginRight: 10},
                    to: {rotation:0},
                    duration: 300
                },
                {
                    triggerElement: 'sm3_3',
                    children:(<Image image={{ desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/1605496759836868.jpg', mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/160549675966582.jpg'}}/>),
                    from: {rotation:-20, marginLeft:10, marginRight: 10},
                    to: {rotation:0},
                    duration: 300
                }]}
                photosTags={['A.P.C']}
                products={{
                    shopUrl: "https://cn.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'ZVXOCCD0602HFGYX',
                            name: 'Marlo 饰口袋格纹外套',
                            brand: 'Zadig & Voltaire',
                        },
                        {
                            sku: 'OFWJKPB3611MFBKX',
                            name: '箭头缝饰格纹连帽夹克',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                        },
                        {
                            sku: 'PMASTROGAHIMFYEX',
                            name: '泼墨设计饰 logo 格纹衬衫',
                            brand: 'Palm Angels',
                        },
                        {
                            sku: 'TBECGB06741MFBKX',
                            name: '饰 logo 千鸟格纹手拿包',
                            brand: 'THOM BROWNE',
                        }
                    ]
                }}
            />
            <ProductShow 
                title="Crimson Flame" 
                content="Move over Classic Blue, there’s a new competitor in town, and its name is Crimson Flame. Much like its fellow primary colour, Crimson Flame evokes a sense of strength and resilience, but brings a raw fervour and much needed heat for the chilly winter days. For this standout colour, go big or go home – deck yourself out in head-to-toe crimson (full tracksuit might just be appropriate here), or for a toned-down look, pick one piece as a statement item to highlight. Our favourites from Off-White and Palm Angels will just about do the trick."
                scrollMagicItems={[{
                    triggerElement: 'sm4_1',
                    children:(<Image hideMobile={1} image={{ desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967600516073.jpg', mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967600867624.jpg'}}/>),
                    from: {rotation:10, marginLeft:10, marginRight: 10},
                    to: {rotation:0},
                    duration: 300
                },
                {
                    triggerElement: 'sm4_2',
                    children:(<Image image={{ src: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967602172214.jpg'}}/>),
                    from: {rotation:-10, marginLeft:10, marginRight: 10},
                    to: {rotation:0},
                    duration: 300
                }]}
                photosTags={['AMI', 'A.P.C', 'N.HOLLYWOOD']}
                products={{
                    shopUrl: "https://cn.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'OFWSNAR7712MFRDX',
                            name: '箭头装饰拼色运动鞋',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                        },
                        {
                            sku: '0ZXPTM152010ERDX',
                            name: '老虎边饰休闲裤',
                            brand: 'A BATHING APE®',
                        },
                        {
                            sku: 'OFWSWDE2512MFRDX',
                            name: '斜纹边饰卫衣',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                        },
                        {
                            sku: 'PMACPCR0603MFRDX',
                            name: 'Logo 刺绣棒球帽',
                            brand: 'Palm Angels',
                        }
                    ]
                }}
            />
            <ProductShow 
                title="Denim 2.0" 
                content="A good pair of jeans will last you a lifetime, and the same could be said for any type of denim, whether it be jackets, shirts, or bags for that matter. We’ve curated a selection of power staples to help you stride through the winter while staying on top of your game. Coming in first is Off-White with their embroidered denim jeans in collaboration with EV BRAVADO, along with JUUN.J’s exclusive washed denim jacket in a versatile muted tone. The final touch? Wear them together to channel the ultimate street luxe."
                scrollMagicItems={[{
                    triggerElement: 'sm5_1',
                    children:(<Image image={{ desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967603995359.jpg', mobile:'//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967605191773.jpg'}}/>),
                    from: {rotation: -20, marginLeft:10, marginRight: 10},
                    to: {rotation:0},
                    duration: 300
                },
                {
                    triggerElement: 'sm5_2',
                    children:(<Image image={{ desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967607835362.jpg', mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967565531617.jpg'}}/>),
                    from: {rotation: 10, marginLeft:10, marginRight: 10},
                    to: {rotation:0},
                    duration: 300
                }]}
                photosTags={['MAISON MARGIELA', 'COMME DES GARÇONS HOMME PLUS', 'MIHARA YASUHIRO']}
                products={{
                    shopUrl: "https://cn.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'JUUJK64P10PMFBLX',
                            name: '饰口袋水洗牛仔夹克',
                            brand: 'JUUN.J',
                        },
                        {
                            sku: '0ZXJKM10004XENYX',
                            name: '挖剪细节直排扣外套',
                            brand: 'A BATHING APE®',
                        },
                        {
                            sku: 'ZVXJNCA3001HFBLX',
                            name: 'David 饰标语牛仔裤',
                            brand: 'Zadig & Voltaire',
                        },
                        {
                            sku: 'OFWJNSB0514MFBKX',
                            name: '饰“BELT”印花腰带牛仔裤',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                        }
                    ]
                }}
            />
            <ShopAll 
                cta={{
                    link: "/b_it/OCT-EDITORIAL-M",
                    content: 'SHOP ALL'
                }}
            />  
            <RedirectBannerCta media={(
            <Image image={{mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/1605496756776329.jpg', desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967567286747.jpg'}}/> 
            )} 
            desc={{
                titles: ['FW20 WOMENSWEAR'],
                content: 'Click here to see the curated guide.'
            }}
            cta={{
                link: '/b_it/landingPage/november-fw20-w',
                content: 'DISCOVER NOW'
            }}
            />
        </main>
    </article>
);

export default App;
