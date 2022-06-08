import Image from "next/image";

// images


// data
const VideoData = [
    {
        id:1,
        name:"Queen Elizabeth, Anchor in a Storm Tossed Britain, Marks 70-Year...",
        date:"06/02/2022",
        clock:"11:15",
        num:222,
        image:"https://www.youtube.com/watch?v=NLmByXTPlcE"
    },
    {
        id:2,
        name:"Thrash metal sirens taking an axe to Middle East’s taboos",
        date:"06/02/2022",
        clock:"11:15",
        num:222,
        image:"https://www.youtube.com/watch?v=NLmByXTPlcE"
    },
    {
        id:3,
        name:"WATCH oil tanker explode off Nigerian coast",
        date:"06/02/2022",
        clock:"11:15",
        num:222,
        image:"https://www.youtube.com/watch?v=NLmByXTPlcE"
    },
    {
        id:4,
        name:"Biden reveals ISIS leader was ‘removed’ in recent US op in Syria",
        date:"06/02/2022",
        clock:"11:15",
        num:222,
        image:"https://www.youtube.com/watch?v=NLmByXTPlcE"
    }
]


export default function VideoNews() {
    return(
        <section>
            <div className="container">
                <div className="video">
                    <div className="video__head">
                        <h1 className="video__header">Video news</h1>
                        <p className="video__text">Prince Charles welcomed his mother's wish that Camilla</p>
                    </div>
                    <ul className="vide__list">
                        {
                            VideoData?.map(e => {
                                return(
                                    <li className="vide__item" key={e.id}>
                                        <iframe src={e.image} width={300}></iframe>
                                        <h2 className="vide__item--head">{e.name}</h2>
                                        <span className="vide__item--span">{e.date}</span>
                                        <span className="vide__item--span">{e.clock}</span>
                                        <span className="vide__item--span">{e.num}</span>
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