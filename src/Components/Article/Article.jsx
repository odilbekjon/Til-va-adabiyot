import Link from "next/link";
import Image from "next/image";

// images
import Ellipse from "../../Assets/images/Ellipse.png";

export default function Article(){
    return(
        <section>
            <div className="container">
                <div className="article">
                    <div className="article__header">
                        <Link href={'/'}><a className='aside__link' >Bosh sahifa</a></Link>
                        <span className='aside__span'> | Bosma jurnal</span>
                    </div>
                    <div className="article__box">
                        <div className="article__left">
                            <div className="left__wrapper">
                                <Link href={'/article'}><a className="wrapper__link">Talablar</a></Link>
                                <Link href={'/vacancy'}><a className="wrapper__link2">Narxlar</a></Link>
                            </div>
                        </div>
                        <div className="article__right">
                            <div className="right__header">
                                <h1 className="article__head">Maqola topshirishga qo‘yilgan talablar</h1>
                                <span className="article__span">Ҳурматли муаллифлар!</span>
                                <p className="article__text">«Til va adabiyot ta’limi» – «Преподавание языка и литературы» – «Language and literature teaching» илмий-методик журнали ва электрон журнали фан номзодлари ва фан докторлари, ёш олимлар, илмий тадқиқот олиб бораётган изланувчилар, мустақил тадқиқотчилар, ўқитувчилар, магистрантлар ва талабалар томонидан таҳририятга юборилган мақолаларни оммалаштириш, эълон қилиш учун қабул қилади. Таҳририятга юборилган барча материаллар журналнинг Таҳрир ҳайъати томонидан экспертизадан ўтказилади. Муҳарририят томонидан маъқулланган мақолалар журналда эълон қилинади.Юборилган ҳар бир мақоланинг ҳажми камида 4 бет, кўпи билан 9–10 бет бўлиши лозим. Барча материалларни til_adabiyot@umail.uz электрон почтаси ёки @TAT_jurnal телеграм каналида кўрсатилган муҳаррирларга юборишингизни cўраймиз.</p>
                            </div>
                            <ul className="article__list">
                                <h2 className="article__list--head">Муаллифлар тақдим этиши зарур бўлган маълумотлар:</h2>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Фамилияси, исми, отасининг исми (тўлиқ).</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Илмий даражаси (мавжуд бўлганда).</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Илмий унвони (мавжуд бўлганда).</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Иш жойи ва лавозими таълим муассасаси, ОТМнинг тўлиқ номи, шаҳар ва</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> вилоят кўрсатилган ҳолда..</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Электрон почтаси (e-mail).</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Телефон рақами (моб., уй).</li>
                            </ul>
                            <ul className="article__list">
                                <h2 className="article__list--head">Мақолани расмийлаштиришга қўйилган талаблар:</h2>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Матн муҳаррири – Microsoft Word.</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Формат – А4.</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Матннинг икки ёни, тепа ва пастидан қолдириладиган ўлчам – 2 см.</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Шрифт – Times New Roman.</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Ўзбек тилидаги мақола лотин алифбосида ёзилади.</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Мақола матни учун шрифтнинг катталиги – 14 пт.</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Мақола матни учун қаторлар оралиғи – 1,5 интервал.</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Хат боши (абзац) – 1 см.</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Жойлашуви – китобий (книжная), сўзларни кейинги сатрга кўчиришсиз,бетлар тагига қўйилган ҳаволаларсиз.</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Ҳар хил график ва жадваллар оқ-қора рангда бўлиши талаб қилинади.</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Муаллифнинг исми, фамилияси, отасининг исми, иш жойи, (ўқиш жойи) ҳақидаги маълумот мақола юқори қисмининг ўнг тарафига кичик ҳарфларда курсив билан ёзилади.</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Мақоланинг номи – босма ҳарфларда марказдан қўйилади.</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Аннотация ўзбек, рус, инглиз тилларида (12 шрифт, 1 интервал оралиқда) ёзилиши лозим. Аннотацияда мавзунинг таснифи, ишнинг мақсади ва эришилган натижалар, ишнинг илмий янгилиги билан боғлиқ қисқача маълумотлар берилади. Сўзлар сони кўпи билан 40–50 сўз оралиғида бўлиши мақсадга мувофиқ.</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Калит сўз ва иборалар – (5–7 тадан кам бўлмаган) уч тилда– ўзбек, рус, инглиз тилларида берилади.</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Мақола матни – кенглиги бўйича текисланган бўлиши керак.</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Мақоланинг тузилиши: кириш, асосий қисм ва хулосадан иборат бўлиши шарт.</li>
                                <li className="article__item">Кириш қисмида танланган мавзунинг долзарблиги, янгилиги, тадқиқот мақсади ва вазифалари келтирилади. Асосий қисмда илмий муаммонинг тадқиқот методлари, эришилган натижалар баён қилинади. Хулоса қисмида эса натижалар умумлаштирилади, якуний хулосалар, тавсия ва таклифлар, кейинги тадқиқ этиладиган йўналишлар келтирилади.</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Муаллифнинг исми-фамилияси, отасининг исми мақолада ажратилмаган ҳолда ёзилади: А.Н.Фозилов, адабиётлар рўйхатида эса қуйидагича ёзилади: Фозилов А.Н.</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Матндаги ҳаволалар қуйидаги тартибда шакллантирилади: [1: 195], [3: 20; 7: 68], [4].</li>
                                <li className="article__item"><Image className="item--img" src={Ellipse} alt="image" /> Фойдаланилган адабиётлар рўйхати 12 ўлчамли шрифтда тартиб билан кўрсатилиши лозим. Фақатгина мақолада фойдаланилган адабиётлар рўйхати келтирилиши керак.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}