import Image from "next/image";

// images
import Economy1 from "../../Assets/images/economy1.png";
import Economy2 from "../../Assets/images/economy2.png";
import Economy3 from "../../Assets/images/economy3.png";
import Economy4 from "../../Assets/images/economy4.png";


const economy = [
    {
        id:1,
        name:"Americans have become germaphob after pandemic – survey",
        text:"Prince Charles welcomed his mother's wish that Camilla, Duchess of Cornwall, be known as...",
        date:"06/02/2022",
        clock:"11:15",
        num:222,
        img:Economy1
    },
    {
        id:2,
        name:"Children’s deaths confirmed following US raid in Syria",
        text:"Prince Charles welcomed his mother's wish that Camilla, Duchess of Cornwall, be known as...",
        date:"06/02/2022",
        clock:"11:15",
        num:222,
        img:Economy2
    },
    {
        id:3,
        name:"Astronomers set up anti-satellite initiative",
        text:"Prince Charles welcomed his mother's wish that Camilla, Duchess of Cornwall, be known as...",
        date:"06/02/2022",
        clock:"11:15",
        num:222,
        img:Economy3
    },
    {
        id:4,
        name:"EU country repatriates ISIS-linked women",
        text:"Prince Charles welcomed his mother's wish that Camilla, Duchess of Cornwall, be known as...",
        date:"06/02/2022",
        clock:"11:15",
        num:222,
        img:Economy4
    },
    
]

export default function Economy(){
    return(
        <section>
            <div className="container">
                <div className="economy">
                    <div className="economy__box">
                        <h1 className="economy__head">Economy</h1>
                        <p className="economy__text">Prince Charles welcomed his mother's</p>
                    </div>
                    <div className="economy__list">
                        {
                            economy?.map(i => {
                                return(
                                    <div key={i.id} className="economy__item">
                                        <div className="item__left">
                                            <Image className="item__imag" src={i.img} width={285} height={200} alt="" />
                                        </div>
                                        <div className="item__right">
                                            <h2 className="item__head">{i.name}</h2>
                                            <p className="item__text">{i.text}</p>
                                            <span className="item__date">{i.date}</span>
                                            <span className="item__clock">{i.clock}</span>
                                            <span className="item__num">{i.num}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <a className="economy__link" href="#">More</a>
                </div>
            </div>
        </section>
    )
}