import Image from "next/image";

// images
import World1 from "../../Assets/images/world1.png";
import World2 from "../../Assets/images/world2.png";
import World3 from "../../Assets/images/world3.png";
import President from "../../Assets/images/president.png";

const UzbekData = [
    {
        id:1,
        name:"Both Ramatov and Ganiev have learned to say 'let's do it -the",
        title:"UK Culture Secretary Nadine Dorries said Big Tech bosses could ‘absolutely’ be held responsible for failing to remove harmful online content",
        date:"06/02/2022",
        clock:"11:15",
        num:222,
        img:President
    }
]

const UzbekNews = [
    {
        id:1,
        name:"Americans have become germaphob after pandemic – survey",
        title:"Prince Charles welcomed his mother's wish that Camilla, Duchess of Cornwall, be known as Queen...",
        date:"06/02/2022",
        clock:"11:15",
        num:222,
        img:World1
    },
    {
        id:2,
        name:"Americans have become germaphob after pandemic – survey",
        title:"Prince Charles welcomed his mother's wish that Camilla, Duchess of Cornwall, be known as Queen...",
        date:"06/02/2022",
        clock:"11:15",
        num:222,
        img:World2
    },
    {
        id:3,
        name:"Americans have become germaphob after pandemic – survey",
        title:"Prince Charles welcomed his mother's wish that Camilla, Duchess of Cornwall, be known as Queen...",
        date:"06/02/2022",
        clock:"11:15",
        num:222,
        img:World3
    }
]


export default function Uzbek(){
    return(
        <section>
            <div className="container">
                <div className="world">
                    <div className="world__head">
                        <h1 className="world__header">Uzbek news</h1>
                        <p className="world__text">Prince Charles welcomed his mother's wish that Camilla</p>
                    </div>
                    <div className="uzbek__box2">

                    <div className="uzbek__list2">
                        {
                            UzbekData?.map(item => {
                                return(
                                    <div className="uzbek__item2" key={item.id}>
                                        <Image className="uzbek__item--img2" src={item.img} width={520} height={280} />
                                        <div className="uzbek__box">
                                            <h2 className="uzbek__item--head2">{item.name}</h2>
                                            <p className="uzbek__item--title2">{item.title}</p>
                                            <span className="uzbek__item--span2">{item.date}</span>
                                            <span className="uzbek__item--span2">{item.clock}</span>
                                            <span className="uzbek__item--span2">{item.num}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="uzbek__list">
                        {
                            UzbekNews?.map(item => {
                                return(
                                    <div className="uzbek__item" key={item.id}>
                                        <Image className="uzbek__item--img" src={item.img} width={410} height={280} />
                                        <div className="uzbek__box">
                                            <h2 className="uzbek__item--head">{item.name}</h2>
                                            <p className="uzbek__item--title">{item.title}</p>
                                            <span className="uzbek__item--span">{item.date}</span>
                                            <span className="uzbek__item--span">{item.clock}</span>
                                            <span className="uzbek__item--span">{item.num}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    </div>
                </div>
            </div>
        </section>
    )
}