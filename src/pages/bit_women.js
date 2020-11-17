import React from 'react';
import Hero from '../components/Hero/Hero.jsx';
import ProductShow from "../components/productShow/productShow.jsx";
import Image from '../components/Image/image.jsx';
import RedirectBannerCta from '../components/Redirect/redirectBannerCta.jsx';

const BitWomen = () => (
    <>
        <Hero 
            banner={<Image image={{ mobile: "//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967569764634.jpg", desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967583768805.jpg'}}/>}
            title='The Sartorial Escape'
            content="The shedding of autumn leaves mark a time of great fluidity and change, but the fashion landscape for FW20 conversely sees a graceful return to the reliable, timeless trends of decades past. This winter, dive into an ode to classics – but with a modern twist. From traditional autumn prints to dark romantic Victoriana, discover our selection of the season’s coolest womenswear looks."
        />
        <main className="main">
            <ProductShow 
                title="Checks, Not Cheques" 
                content="Akin to the crisp wind whistling through the rustling trees, the resurgence of this quintessential autumn print signals that cooler days are well upon us. Be it the cusp-end of summer or deep into the brisk winter, this timeless, transeasonal trend certainly checks all our boxes. Update the heritage print for 2020 with a blast from the past – try a statement fringe edition by IRO (cowboy boots not included) or a 90’s-inspired trench by MSGM – laced with just enough of the iconic Clueless yellow to end your cool weather uniform on a playful note."
                scrollMagicItems={[{
                    triggerElement: 'sm1_1',
                    children:(<Image image={{mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967578866932.jpg', desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967574434983.jpg'}}/>),
                    from: {rotation:3, marginRight: 10, marginLeft: 10},
                    to: {rotation:0},
                    duration: '300'
                },
                {
                    triggerElement: 'sm1_2',
                    children:(<Image image={{mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967585325582.jpg', desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967583354687.jpg'}}/>),
                    from: {rotation:10,  marginRight: 10, marginLeft: 10},
                    to: {rotation:0},
                    duration: '300'
                }]}
                photosTags={['KOLOR', 'PORTS PURE']}
                triggerHook="onLeave"
                products={{
                    shopUrl: "https://hk.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'IROOCCOCHAXXFRDZ',
                            brand: 'IRO',
                            name: 'Cocha plaid overcoat',
                        },
                        {
                            sku: 'MSGOC05Y667AFBGZ',
                            brand: 'MSGM',
                            name: 'Belted plaid overcoat',
                        },
                        {
                            sku: 'MMXPTA0530SXFBWX',
                            brand: 'MAISON MARGIELA',
                            name: 'Plaid tailored trousers',
                        },
                        {
                            sku: 'JNPDSPW2A7WDFNYZ',
                            brand: 'SJYP',
                            name: 'Layered plaid dress',
                        }
                    ]
                }}
            />
            <ProductShow 
                title="Patchwork Perfection" 
                content="This particular trend is perhaps one of the most adored styles of the season and our personal favourite: Patchwork (and with good reason). Characterised by its quirky demeanour but nothing short of an admirable seriousness, the patched aesthetic has been adopted by a plethora of brands — more noticeably Y’s and Maison Flaneur. Among the list is also JIL SANDER with a much more refined approach and PortsPURE, championing an adventurous deconstructed appeal."
                scrollMagicItems={[{
                    triggerElement: 'sm2_1',
                    children:(<Image image={{ desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967586224130.jpg', mobile:'//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/1605496758753223.jpg'}}/>),
                    from: {rotation:3, marginRight: 10, marginLeft: 10},
                    to: {rotation:0},
                    duration: 300,
                },
                {
                    triggerElement: 'sm2_2',
                    children:(<Image image={{ desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967590476153.jpg', mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967590554589.jpg'}}/>),
                    from: {rotation:-10, marginRight: 10, marginLeft: 10},
                    to: {rotation:0},
                    duration: 300,
                }]}
                photosTags={['Y\'s']}
                products={{
                    shopUrl: "https://hk.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'MFRKNSW721FXFKHX',
                            brand: 'MAISON FLANEUR',
                            name: 'Patchwork sweater',
                        },
                        {
                            sku: 'JLXSK355054XFIVZ',
                            brand: 'JIL SANDER',
                            name: 'Self-tie patchwork skirt',
                        },
                        {
                            sku: 'PPPJKJ02101CFBLX',
                            brand: 'PortsPURE',
                            name: 'Patchwork denim jacket',
                        },
                        {
                            sku: 'YZXJKC03801XFWHX',
                            brand: 'Y\'s',
                            name: 'Patchwork jacket',
                        }
                    ]
                }}
            />
            <ProductShow 
                title="The Dark Victoriana" 
                content="Frozen in time by its grandiose portrayals in classic English literature and art, the elegant and intricate collars and embellished lace trim exudes an aura of sumptuous luxury that go hand in hand with winter’s beck and call. But for FW20, think less Wuthering Heights, and more Bram Stoker’s Dracula in one of our favourite trends this season – the Dark Victoriana. Voluminous puff sleeves, bib fronts and ruffle detailing take a turn for the gothic in exaggerated silhouettes by Simone Rocha or doubled (and tripled) in bewitching tulle dresses by ACT NO.1."

                scrollMagicItems={[{
                    triggerElement: 'sm3_1',
                    children:(<Image image={{ src: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967592641026.jpg'}}/>),
                    from: {rotation:10, marginRight: 10, marginLeft: 10},
                    to: {rotation:0},
                    duration: 300
                },
                {
                    triggerElement: 'sm3_2',
                    children:(<Image image={{ desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/1605496759485303.jpg', mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/1605496759485303.jpg'}}/>),
                    from: {rotation:20, marginRight: 10, marginLeft: 10},
                    to: {rotation:0},
                    duration: 300
                },
                {
                    triggerElement: 'sm3_3',
                    children:(<Image image={{ desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967597352044.jpg', mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967596122641.jpg'}}/>),
                    from: {rotation:-20, marginRight: 10, marginLeft: 10},
                    to: {rotation:0},
                    duration: 300
                }]}
                photosTags={['COMME DES GARÇONS', 'SIMONE ROCHA', 'GLADYS TAMEZ MILLINERY']}
                products={{
                    shopUrl: "https://hk.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'SMRDS702005XFBKX',
                            brand: 'Simone Rocha',
                            name: 'Tulle sleeves dress',
                        },
                        {
                            sku: 'ZMMDS8962DLXFWHB',
                            brand: 'ZIMMERMANN',
                            name: 'Ladybeetle bow-tie dress',
                        },
                        {
                            sku: 'ATNDSFD2014XFBGX',
                            brand: 'ACT NO.1',
                            name: 'Tulle ruffles layered dress',
                        },
                        {
                            sku: 'RDVDSA145BSXFPKL',
                            brand: 'REDValentino',
                            name: 'Ruffles-trimmed dress',
                        }
                    ]
                }}
            />
            <ProductShow 
                title="All-Weather Leather" 
                content="Perhaps one of the most consistent things in contemporary fashion has been the commanding notion of strength and confidence associated with women in leather. Be it genuine leather from esteemed Italian tanneries or just as valuable and eco-conscious faux leather from sustainable labels, the luxurious material has something to offer to everyone. With brands such as Acne Studios and IRO presenting leather boots and classic biker jackets, French label Jacquemus also chimes in with petite accessories to match, making sure you’re covered from head-to-toe."
                
                scrollMagicItems={[{
                    triggerElement: 'sm4_1',
                    children:(<Image image={{ desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967598852584.jpg', mobile:'//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967599776319.jpg'}}/>),
                    from: {rotation:10, marginRight: 10, marginLeft: 10},
                    to: {rotation:0},
                    duration: 300
                },
                {
                    triggerElement: 'sm4_2',
                    children:(<Image image={{ src: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967601774957.jpg'}}/>),
                    from: {rotation:-10, marginRight: 10, marginLeft: 10},
                    to: {rotation:0},
                    duration: 300
                }]}
                photosTags={['ZUCCA', 'OFF-WHITE c/o VIRGIL ABLOH']}
                products={{
                    shopUrl: "https://hk.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'DOOSK001202XFBKX',
                            brand: 'D\'DEMOO',
                            name: 'Asymmetrical faux leather skirt',
                        },
                        {
                            sku: 'ANXLBAD0260OFWHX',
                            brand: 'Acne Studios',
                            name: 'Square toe leather boots',
                        },
                        {
                            sku: 'IROLEWF09LEXDBKX',
                            brand: 'IRO',
                            name: 'Ashville leather jacket',
                        },
                        {
                            sku: 'JAQBG03BA05XFBKX',
                            brand: 'JACQUEMUS',
                            name: 'Le petite Chiquito leather bag',
                        }
                    ]
                }}
            />
            <ProductShow 
                title="Polished Modernity" 
                content="Amongst this collection of timeless trends, little comes close to the air of confidence and defiance tailored silhouettes bring. From a blazer & slacks co-ord to oversized power shoulders for the street style aficionado, the last few seasons has seen the classic reimagined in bold colours, striking patterns and reconstructed renditions. The keyword this season? Structured effortlessness. Opt for oversized silhouettes from Jacquemus and Comme des Garçons that layers over anything from knit tops, midi skirts and wool trousers."
                scrollMagicItems={[{
                    triggerElement: 'sm5_1',
                    children:(<Image image={{ desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967604302912.jpg', mobile:'//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/160549676039282.jpg'}}/>),
                    from: {rotation: -20, marginRight: 10, marginLeft: 10},
                    to: {rotation:0},
                    duration: 300
                },
                {
                    triggerElement: 'sm5_2',
                    children:(<Image image={{ desktop: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967607498903.jpg', mobile: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2020/11/16/16054967565624325.jpg'}}/>),
                    from: {rotation: 10, marginRight: 10, marginLeft: 10},
                    to: {rotation:0},
                    duration: 300
                }]}
                photosTags={['COMME DES GARÇONS']}
                products={{
                    shopUrl: "https://hk.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'N%2BXJK042014XFRDD',
                            brand: 'Proenza Schouler',
                            name: 'Self-tie blazer',
                        },
                        {
                            sku: 'JZWJKJFJ022XFMLX',
                            brand: 'JUNYA WATANABE WOMEN',
                            name: 'Belted contrast plaid faux leather blazer',
                        },
                        {
                            sku: 'MSGJKG10711BFPKL',
                            brand: 'MSGM',
                            name: 'Tailored blazer',
                        },
                        {
                            sku: 'CAXJKGFJ031XFBKX',
                            brand: 'Comme Des Garçons',
                            name: 'Panelled hem blazer jacket',
                        }
                    ]
                }}
            />
            <RedirectBannerCta media={(
            <Image image={{mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/16026483886741974.jpg', desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/16026483834569700.jpg'}}/> 
            )} 
            desc={{
                titles: ['FW20 MENSWEAR'],
                content: 'Click here to see the curated guide.'
            }}
            cta={{
                link: '/b_it/landingPage/trend-editorial-m',
                content: 'DISCOVER NOW'
            }}
            />
        </main>
    </>
);

export default BitWomen;