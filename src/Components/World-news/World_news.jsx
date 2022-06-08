import Image from "next/image";

// images
import World1 from "../../Assets/images/world1.png";
import World2 from "../../Assets/images/world2.png";
import World3 from "../../Assets/images/world3.png";

const worldNews = [
    {
        id:1,
        name:"Pandemic ‘ceasefire’ for Europe predicted by WHO",
        title:"Prince Charles welcomed his mother's wish that Camilla, Duchess of Cornwall, be known as Queen...",
        date:"06/02/2022",
        clock:"11:15",
        num:222,
        img:World1
    },
    {
        id:2,
        name:"Costa Ricans head to polls, largely undecided, as runoff expected",
        title:"Prince Charles welcomed his mother's wish that Camilla, Duchess of Cornwall, be known as Queen...",
        date:"06/02/2022",
        clock:"11:15",
        num:222,
        img:World2
    },
    {
        id:3,
        name:"Russia could invade Ukraine any day but diplomatic path is open -White House",
        title:"Prince Charles welcomed his mother's wish that Camilla, Duchess of Cornwall, be known as Queen...",
        date:"06/02/2022",
        clock:"11:15",
        num:222,
        img:World3
    }
]


export default function WorldNews(){
    return(
        <section>
            <div className="container">
                <div className="world">
                    <div className="world__head">
                        <h1 className="world__header">World news</h1>
                        <p className="world__text">Prince Charles welcomed his mother's wish that Camilla</p>
                    </div>
                    <ul className="world__list">
                        {
                            worldNews.map(item => {
                                return(
                                    <li className="world__item" key={item.id}>
                                        <Image className="world__item--img" src={item.img} width={410} height={280} />
                                        <h2 className="world__item--head">{item.name}</h2>
                                        <p className="world__item--title">{item.title}</p>
                                        <span className="world__item--span">{item.date}</span>
                                        <span className="world__item--span">{item.clock}</span>
                                        <span className="world__item--span">{item.num}</span>
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