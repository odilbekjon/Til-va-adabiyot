import imgP from "../../Assets/img/image 153.png"
import imgP2 from "../../Assets/img/image 155.png"

const PartnersArr = [
    {
        id: 1,
        img: imgP2,
        title: "O'zbekiston Respublikasi Xalq Ta'limi Vazirligi"
    },
    {
        id: 2,
        img: imgP,
        title: "O'zbekiston Respublikasi Xalq Ta'limi Vazirligi"
    },
    {
        id: 3,
        img: imgP,
        title: "O'zbekiston Respublikasi Xalq Ta'limi Vazirligi"
    },
    {
        id: 4,
        img: imgP,
        title: "O'zbekiston Respublikasi Xalq Ta'limi Vazirligi"
    },
    {
        id: 5,
        img: imgP,
        title: "O'zbekiston Respublikasi Xalq Ta'limi Vazirligi"
    }
];

import Image from "next/image";


const Partners = () => {
    return (
        <ul className="Partners__list">
            {
                PartnersArr && PartnersArr.map(e => (
                    <li className="Partners__list--item" key={e.id}>
                        <Image className="Partners__list--img" src={e.img} alt="img" />
                        <h4 className="Partners__list--title">{e.title}</h4>
                    </li>
                ))
            }

        </ul>
    )
}

export default Partners;