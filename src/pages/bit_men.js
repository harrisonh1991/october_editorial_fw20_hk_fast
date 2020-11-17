import React from 'react';
import Hero from '../components/Hero/Hero.jsx';
import ProductShow from "../components/productShow/productShow.jsx";
import Image from '../components/Image/image.jsx';
import RedirectBannerCta from '../components/Redirect/redirectBannerCta.jsx';

const BitMen = () => (
    <>
        <Hero {...{
                banner: <Image image={{ mobile: "//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967566866908.jpg", desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967566252739.jpg'}}/>,
                title: 'The Sartorial Escape',
                content: "The shedding of autumn leaves mark a time of great fluidity and change, but the fashion landscape for FW20 conversely sees a graceful return to the reliable, timeless trends of decades past. This winter, dive into an ode to classics – but with a modern twist. From traditional autumn prints to dark romantic Victoriana, discover our selection of the season’s coolest womenswear looks."
            }}
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
                    shopUrl: "https://hk.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'SLAJK5JKBLKMFBKX',
                            brand: 'STAMPD',
                            name: 'Harness strap utility vest bomber jacket',
                        },
                        {
                            sku: 'J%2BXPTPAM15CMFBKX',
                            brand: '_JULIUS',
                            name: 'Distressed textured cargo pants',
                        },
                        {
                            sku: 'NXXPT2CP010MFGRX',
                            brand: 'N.HOOLYWOOD',
                            name: 'Belted cargo pants',
                        },
                        {
                            sku: 'ENGVCF1C008MFGRX',
                            brand: 'ENGINEERED GARMENTS',
                            name: 'Panelled patch pocket vest jacket',
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
                photosTags={['TOGA ARCHIVES', 'Comme Des Garçons HOMME PLUS']}
                products={{
                    shopUrl: "https://hk.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: '07XCDHFT029MFORX',
                            brand: 'Comme des Garçons HOMME',
                            name: 'Snowflake zip cardigan',
                        },
                        {
                            sku: 'NEDCDHM273MMFNYX',
                            brand: 'NEEDLES',
                            name: 'Brushed mohair cardigan',
                        },
                        {
                            sku: 'BBKCDKT9104MFBKX',
                            brand: 'BAPE BLACK',
                            name: 'Pattern intarsia cardigan',
                        },
                        {
                            sku: 'OFWCDSR0816MFBGX',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                            name: 'Bandana woven cardigan',
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
                    shopUrl: "https://hk.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'JZXSTB02605MFBGX',
                            brand: 'JUNYA WATANABE',
                            name: 'Check panelled shirt',
                        },
                        {
                            sku: '07XJKHFJ015MFNYX',
                            brand: 'Comme des Garçons HOMME',
                            name: 'Check contrast hem caban jacket',
                        },
                        {
                            sku: 'MHRST5SH113MFBWX',
                            brand: 'Mihara Yasuhiro',
                            name: 'Destroyed plaid shirt',
                        },
                        {
                            sku: 'PMAJKBB0401MFBLZ',
                            brand: 'PALM ANGELS',
                            name: 'Plaid track jacket',
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
                    shopUrl: "https://hk.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'OFWKNPK5412MFRDX',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                            name: 'Pascal sweater',
                        },
                        {
                            sku: 'CDXPTP03105MFRDX',
                            brand: 'Comme des Garçons HOMME PLUS',
                            name: 'Cropped pants',
                        },
                        {
                            sku: 'PMACPCR0603MFRDX',
                            brand: 'PALM ANGELS',
                            name: 'Classic logo cap',
                        },
                        {
                            sku: 'OFWSNVD8910MFRDX',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                            name: 'Out of office "ooo" sneakers',
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
                    shopUrl: "https://hk.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'OFWJN394441MDBKZ',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                            name: 'X EV BRAVADO embroidered denim jeans',
                        },
                        {
                            sku: 'JUUJK939PD6MFGYL',
                            brand: 'JUUN.J',
                            name: 'Washed denim jacket',
                        },
                        {
                            sku: 'HFDBG02K201MFBLX',
                            brand: 'HONEY FUCKING DIJON',
                            name: 'Denim tote bag',
                        },
                        {
                            sku: '0ZXJKM10004XEBKX',
                            brand: 'A BATHING APE®',
                            name: 'Relaxed Shark Hoodie Denim jacket',
                        }
                    ]
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
                link: '/b_it/landingPage/trend-editorial-w',
                content: 'DISCOVER NOW'
            }}
            />
        </main>
    </>
);

export default BitMen;
