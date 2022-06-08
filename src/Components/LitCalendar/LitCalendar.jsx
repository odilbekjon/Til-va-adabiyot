import Link from 'next/link';
import Image from 'next/image';


// images
import Poet1 from '../../Assets/images/aside_img1.png';  
import Poet2 from '../../Assets/images/aside_img2.png';  
import Poet3 from '../../Assets/images/aside_img3.png';  


const data = [
    {
        id:"1",
        name:"Alisher Navoiy",
        title:"Asror Mo‘min, shoir va tarjimon, Yozuvchilar uyushmasi azosi  Qush tili (Alisher Navoiyning «Lison ut-tayr» dostoni asosida)",
        text:"Alisher Navoiy (1441-1501) - buyuk shoir va mutafakkir, davlat arbobi. To‘liq ismi Nizomiddin Mir Alisher. Navoiy tahallusi ostida chig‘atoy (eki o‘zbek tili) hamda forsiyda (fors tilidagi asarlarida) ijod qilgan. G‘arbda chig‘atoy adabiyoti hisoblanmish o‘zbek adabiyotining eng yirik namoyondasi. Umuman olganda, butun turkiy xalqlari orasida u kabi yirik shaxs yo‘qdir",
        text2:"Navoiy yoshligidan Xurosonning (Transoksaniya) bo‘lajak hukmdori Husayn Boyqaro bilan (1469-1506) do‘st bo‘lgan. 10-12 yoshidan she’rlar yozishni boshlagan. Navoiyning zamondoshi bo‘lmish tarixchi Xondamir (1473(76) -1534) qoldirgan ma’lumotlarga ko‘ra, mashhur o‘zbek shoiri Lutfiy (1369-1465) qarigan chog‘larida bolakay Navoiy bilan ko‘rishadi va uning she’riy iqtidorini ........",
        lang:"O’zbek tilida",
        img:Poet1
    },
    {
        id:"2",
        name:"Alisher Navoiy",
        title:"Asror Mo‘min, shoir va tarjimon, Yozuvchilar uyushmasi azosi  Qush tili (Alisher Navoiyning «Lison ut-tayr» dostoni asosida)",
        text:"“Boburnoma” – adabiy va tarixiy ahamiyatga molik asar. Unda oʻz davridagi koʻplab kishilarning turli vaziyatlardagi kechinmalari, Osiyoning koʻplab togʻlari, daryolari, oʻrmon va choʻllari, iqlimi, aholisi, ijtimoiy, iqtisodiy, siyosiy ahvoli haqidagi maʼlumotlar jamlangan.",
        text2:"“Boburnoma” – oʻzbek nasrining goʻzal namunasi. Ungacha Yusuf xos Hojibning “Qutadgʻu bilig” asari muqaddimasida, Rabgʻuziy ijodida nasr namunalari uchrar edi. Alisher Navoiy uni yuqori pogʻonaga olib chiqdi. Biroq “Boburnoma” bu borada oʻzbek nasrining oʻziga xos kashfiyoti sifatida yuz koʻrsatdi.",
        lang:"O’zbek tilida",
        img:Poet2
    },
    {
        id:"3",
        name:"Abdulhamid Cho'lpon",
        title:"Asror Mo‘min, shoir va tarjimon, Yozuvchilar uyushmasi azosi  Qush tili (Alisher Navoiyning «Lison ut-tayr» dostoni asosida)",
        text:"“Cho’lpon 1897 yili Andijonda tug’ilgan. Eski maktabda savod chiqargan. Keyin rus-tuzem maktabida o’qigan. 1914 yili Toshkentga keladi va o’z faoliyatini “Sadoi Turkiston” gazetasi bilan bog’laydi. Uning asarlari Orenburg, Ufa, Qozon va Bog’chasaroyda chiqadigan gazeta va jurnallarda ham bosilib turgan..",
        text2:"“ 1916-1917 yillarda Orenburgda yashaydi va u yerda boshqird hukumati mahkamasida kotib bo’lib ishlaydi. So’ng Toshkentga qaytadi. 1920 yilgacha TurkRosTAda xizmat qiladi. 1920 yili Bokuda bo’lgan Sharq xalqlari qurultoyida qatnashadi. O’sha yili Fitrat taklifi bilan Buxoroga boradi va o’zbek tilida chiqadigan “Buxoro axbori” gazetasiga rahbarlik qiladi. Bir yilcha ishlab Toshkentga qaytadi. Adabiyot va madaniyat ishlari bilan shug’ullanadi. 1924-1926 yillarda Cho’lpon Moskvada yashaydi. U yerda ochilgan O’zbek dramstudiyasiga rahbarlik qiladi....",
        img:Poet3
    }
]

function Literature() {

    return(
        <>
           <div className="container">
               <div className="aside">
                   <div className="aside__wrapp">
                       <div className="aside__left">
                        <Link href={'/'}><a className='aside__link' >Bosh sahifa</a></Link>
                        <span className='aside__span'> | Adabiy taqvim</span>
                       </div>
                       <div className="aside__right">
                           <select className='aside__select' name="" id="">
                               <option className='aside__option' value="uz">O'zbek adabiyoti</option>
                               <option className='aside__option' value="uz">Jahon adabiyoti</option>
                           </select>
                       </div>
                   </div>
                   <ul className="aside__list">
                       {
                          data &&  data?.map(i => {
                               return(
                                   <li className='aside__item' key={i.id}>
                                       <div className="aside__list--left">
                                       <h2 className='aside__item--head'>{i.name}</h2>
                                       <div className="aside__item--title">{i.title}</div>
                                       <p className='aside__item--text'>{i.text}</p>
                                       <p className='aside__item--text'>{i.text2}</p>
                                       </div>
                                       <div className="aside__list--right">
                                           <Image src={i.img} width={565}   alt="" />
                                       </div>
                                   </li>
                               )
                           })
                       }
                   </ul>
               </div>
           </div>
        </>
    )
}

export default Literature;