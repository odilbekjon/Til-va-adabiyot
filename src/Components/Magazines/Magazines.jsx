import Link from "next/link";
import Image from "next/image";
import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

// img
import Corona1 from '../../Assets/images/magazine-img1.png';
import Corona2 from '../../Assets/images/magazine-img2.png';
import Corona3 from '../../Assets/images/magazine-img3.png';

const magazines = [
    {
        id:1,
        name:"Coronavirus could be behind mystery dog illness in UK – media",
        title:"Prince Charles welcomed his mother's wish that Camilla, Duchess of Cornwall, be known as Queen...",
        date:"06/02/2022",
        clock:"11:15",
        num:222,
        images:Corona1
    },
    {
        id:2,
        name:"Turkey’s president gets Covid-19 after Ukraine visit",
        title:"Prince Charles welcomed his mother's wish that Camilla, Duchess of Cornwall, be known as Queen...",
        date:"06/02/2022",
        clock:"11:15",
        num:222,
        images:Corona2
    },
    {
        id:3,
        name:"GOP says Capitol riot was ‘legitimate political discourse’",
        title:"Prince Charles welcomed his mother's wish that Camilla, Duchess of Cornwall, be known as Queen...",
        date:"06/02/2022",
        clock:"11:15",
        num:222,
        images:Corona3
    },
    {
        id:4,
        name:"Coronavirus could be behind mystery dog illness in UK – media",
        title:"Prince Charles welcomed his mother's wish that Camilla, Duchess of Cornwall, be known as Queen...",
        date:"06/02/2022",
        clock:"11:15",
        num:222,
        images:Corona1
    },
    {
        id:5,
        name:"Turkey’s president gets Covid-19 after Ukraine visit",
        title:"Prince Charles welcomed his mother's wish that Camilla, Duchess of Cornwall, be known as Queen...",
        date:"06/02/2022",
        clock:"11:15",
        num:222,
        images:Corona2
    },
    {
        id:6,
        name:"GOP says Capitol riot was ‘legitimate political discourse’",
        title:"Prince Charles welcomed his mother's wish that Camilla, Duchess of Cornwall, be known as Queen...",
        date:"06/02/2022",
        clock:"11:15",
        num:222,
        images:Corona3
    }
]

export default function Magazines() {

    const {
        count:{lang}
      } = useSelector((state) => state);
    
      const { literature: li } = Content[lang];

    return(
        <section>
            <div className="container">
                <div className="magazine">
                   <div className="aside__left">
                        <Link href={'/'}><a className='aside__link' >{li.title1}</a></Link>
                        <span className='aside__span'> | {li.title2}</span>
                    </div>
                    <div className="magazine__header">
                        <h1 className="magazine__head">Dolzarb yangiliklar</h1>
                        <p className="magazine__title">Prince Charles welcomed his mother's wish that Camilla</p>
                    </div>
                    <ul className="magazine__list">
                        {
                            magazines.map(item => {
                                return(
                                    <li key={item.id} className="magazine__item">
                                        <Image className="magazine__item--img" src={item.images} width={410} height={280} />
                                        <div className="magazine__item--box">
                                            <h2 className="magazine__item--name">{item.name}</h2>
                                            <p className="magazine__item--title">{item.title}</p>
                                            <span className="magazine__item--date">{item.date}</span>
                                            <span className="magazine__item--clock">{item.clock}</span>
                                            <span className="magazine__item--num">{item.num}</span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}