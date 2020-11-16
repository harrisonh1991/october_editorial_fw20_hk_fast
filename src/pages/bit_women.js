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
                photosTags={['KOLOR', 'Ports Pure']}
                triggerHook="onLeave"
                products={{
                    shopUrl: "https://cn.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'ZVXPTCE0110FFGYX',
                            name: 'Peter 饰口袋格纹休闲裤',
                            brand: 'Zadig & Voltaire',
                        },
                        {
                            sku: 'JNPDSPW2A7WDFNYZ',
                            name: '褶饰拼接格纹连衣裙',
                            brand: 'SJYP',
                        },
                        {
                            sku: 'ANXKNA60218XFRDZ',
                            name: '格纹落肩针织衫',
                            brand: 'Acne Studios',
                        },
                        {
                            sku: 'MSGOC05Y667AFBGZ',
                            name: '饰腰带格纹外套',
                            brand: 'MSGM',
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
                    shopUrl: "https://cn.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'MHRJK5BL161XFPPH',
                            name: '拼接设计飞行员夹克',
                            brand: 'Mihara Yasuhiro',
                        },
                        {
                            sku: 'JNPJKPW2A7WAFNYZ',
                            name: '格纹拼接仿两件式西装外套',
                            brand: 'SJYP',
                        },
                        {
                            sku: 'JNPSWPW2A9KAFBWZ',
                            name: '饰 logo 针织拼接卫衣',
                            brand: 'SJYP',
                        },
                        {
                            sku: '5KXSKS05120XFNYX',
                            name: '材质拼接不对称半身裙',
                            brand: 'KOLOR',
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
                photosTags={['Comme des Garçons', 'Simone Rocha', 'GLADYS TAMEZ MILLINERY']}
                products={{
                    shopUrl: "https://cn.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'N21DS835593CFWHX',
                            name: '褶饰叠层连衣裙',
                            brand: 'N°21',
                        },
                        {
                            sku: 'RDVDSA145BSXFPKL',
                            name: '褶饰薄纱泡泡袖连衣裙',
                            brand: 'REDValentino',
                        },
                        {
                            sku: 'RDVTPB00UT9XEWHX',
                            name: '透视效果蕾丝拼接上衣',
                            brand: 'REDValentino',
                        },
                        {
                            sku: 'SMRTETS284BXFWHX',
                            name: '珠饰蕾丝叠层 T 恤',
                            brand: 'Simone Rocha',
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
                photosTags={['ZUCCa', 'OFF-WHITE c/o VIRGIL ABLOH']}
                products={{
                    shopUrl: "https://cn.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'ZVXSKCU1402FFBDX',
                            name: 'Joslin Cuir 褶皱皮革半身裙',
                            brand: 'Zadig & Voltaire',
                        },
                        {
                            sku: 'ZVXSPCU1407FFBKX',
                            name: '褶皱效果皮革感短裤',
                            brand: 'Zadig & Voltaire',
                        },
                        {
                            sku: 'ZVXLECC1402FFBWX',
                            name: '双口袋皮革夹克',
                            brand: 'Zadig & Voltaire',
                        },
                        {
                            sku: 'ANXLE1AZ166XDBKX',
                            name: '皮革机车夹克',
                            brand: 'Acne Studios',
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
                photosTags={['Comme des Garçons']}
                products={{
                    shopUrl: "https://cn.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'ZVXJKCP0202FFBDX',
                            name: 'Visko 饰口袋天鹅绒西装外套',
                            brand: 'Zadig & Voltaire',
                        },
                        {
                            sku: 'OFWOC222011XFBKX',
                            name: '挖剪细节直排扣外套',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                        },
                        {
                            sku: 'QJXOC628893XFBKX',
                            name: '马甲拼接系扣外套',
                            brand: 'MCQ',
                        },
                        {
                            sku: 'ZVXJKCA0204FFBGX',
                            name: 'Viva 星星缀饰西装外套',
                            brand: 'Zadig & Voltaire',
                        }
                    ]
                }}
            />
            <ShopAll 
                cta={{
                    link: "/b_it/OCT-EDITORIAL-W",
                    content: 'SHOP ALL'
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
                link: '/b_it/landingPage/november-fw20-m',
                content: 'DISCOVER NOW'
            }}
            />
        </main>
    </article>
);

export default App;