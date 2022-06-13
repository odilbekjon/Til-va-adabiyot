import Link from "next/link";
import Image from "next/image";
import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

// images
import News1 from "../../Assets/images/news1.png";
import News2 from "../../Assets/images/news2.png";


export default function UzbekNews(){

    const {
        count:{lang}
    } = useSelector((state) => state);
    
    const { literature: li } = Content[lang];

    return(
        <section>
            <div className="container">
                <div className="news">
                    <div className="news__header">
                        <Link href={'/'}><a className='aside__link' >{li.title1}</a></Link>
                        <span className='aside__span'> | {li.title2}</span>
                    </div>
                    <div className="news__content">
                        <h1 className="content__header">O'zbekiston neft va gaz qazib olishni kengaytirish</h1>
                        <p className="content__title">Prezident Shavkat Mirziyoyev 24-may kuni neft va gaz qazib olish va qazib chiqarishni kengaytirish masalalariga bag‘ishlangan yig‘ilish o‘tkazdi.</p>
                        <Image className="content__image" src={News1} width={954} height={485} alt="image-news" />
                        <p className="content__text">Mamlakat taraqqiyot strategiyasida iqtisodiyotni liberallashtirish va yetakchi tarmoqlarni o‘zgartirish maqsadlari belgilab berilgan. Xususan, neft-gaz sohasida transformatsiya jarayonlari boshlandi,xabar berdidavlat rahbari matbuot xizmatida. Yig‘ilishda prezident, birinchi navbatda, o‘zgarishlar masalalariga e’tibor qaratib, bu jarayonni jadallashtirish zarurligini ta’kidladi. Xalqaro maslahatchilarni jalb etish, strategik yondashuvlarni belgilash, neft-gaz sanoatida buxgalteriya hisobi mexanizmlarining shaffofligini ta’minlash bo‘yicha vazifalar belgilandi.</p>
                        <p className="content__text">Bundan tashqari, korxonalarni moliyaviy sog‘lomlashtirish, faoliyat samaradorligini oshirish hisobiga xarajatlarni kamaytirish, ilg‘or xalqaro tajribaga asoslangan boshqaruv tizimini yaratish chora-tadbirlari belgilandi.Prezidentimiz aholi va korxonalarni yoqilg‘i-energetika resurslari bilan uzluksiz ta’minlash yuzasidan soha rahbarlariga ham aniq topshiriqlar berdi.</p>
                        <Image className="content__image" src={News2} width={954} height={485} alt="image-news" />
                        <p className="content__text">Bundan tashqari, korxonalarni moliyaviy sog‘lomlashtirish, faoliyat samaradorligini oshirish hisobiga xarajatlarni kamaytirish, ilg‘or xalqaro tajribaga asoslangan boshqaruv tizimini yaratish chora-tadbirlari belgilandi.Prezidentimiz aholi va korxonalarni yoqilg‘i-energetika resurslari bilan uzluksiz ta’minlash yuzasidan soha rahbarlariga ham aniq topshiriqlar berdi.Tabiiy gaz iste’molini monitoring qilish va hisobga olishning avtomatlashtirilgan tizimini to‘liq joriy etgan holda yo‘qotishlarni bartaraf etish chora-tadbirlari belgilandi. Resurslarni tejash va muqobil energiya manbalaridan foydalanishni rag'batlantirish muhimligi ko'rsatilgan.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}