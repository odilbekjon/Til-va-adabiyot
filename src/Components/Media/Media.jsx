
const media = [
    {
        id:1,
        name:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, natus! Est explicabo ullam quis ut delectus omnis iure unde eveniet!",
        video:"https://www.youtube.com/embed/AQa_RFPJbcA"
    },
    {
        id:2,
        name:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, natus! Est explicabo ullam quis ut delectus omnis iure unde eveniet!",
        video:"https://www.youtube.com/embed/AQa_RFPJbcA"
    },
    {
        id:3,
        name:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, natus! Est explicabo ullam quis ut delectus omnis iure unde eveniet!",
        video:"https://www.youtube.com/embed/AQa_RFPJbcA"
    },
    {
        id:4,
        name:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, natus! Est explicabo ullam quis ut delectus omnis iure unde eveniet!",
        video:"https://www.youtube.com/embed/AQa_RFPJbcA"
    },
    {
        id:5,
        name:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, natus! Est explicabo ullam quis ut delectus omnis iure unde eveniet!",
        video:"https://www.youtube.com/embed/AQa_RFPJbcA"
    },
    {
        id:6,
        name:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, natus! Est explicabo ullam quis ut delectus omnis iure unde eveniet!",
        video:"https://www.youtube.com/embed/AQa_RFPJbcA"
    },
    {
        id:7,
        name:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, natus! Est explicabo ullam quis ut delectus omnis iure unde eveniet!",
        video:"https://www.youtube.com/embed/AQa_RFPJbcA"
    }
    
]

export default function Media() {

    const newMedia = media.splice(3)

    return(
        <section>
            <div className="container">
                <div className="media">
                    <div className="media__box">
                        <ul className="media__list">
                            <li className="media__item1">
                                <iframe className="media__video" src={media[0].video}  width={500} height={500}></iframe>
                                <p className="media__title">{media[0].name}</p>
                            </li>
                            <li className="media__item2">
                                <iframe className="media__video" src={media[0].video}  width={500} height={340}></iframe>
                                <iframe className="media__video" src={media[0].video}  width={500} height={340}></iframe>
                            </li>
                        </ul>
                        <ul className="media__wrapper">
                            {
                                newMedia.map(item => {
                                    return(
                                        <li className="media__wrapper--item" key={item.id}>
                                            <iframe className="media__video" src={item.video} width={500} height={500}></iframe>
                                            <p className="media__title">{item.name}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}