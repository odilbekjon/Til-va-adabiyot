import imgJ from "../../Assets/img/Rectanglel.png"

const EJournalArr = [
    {
        id: 1,
        image: imgJ,
        title: "Til shunoslik",
        text: "Ways to strengthen financial in the rational USE of state..."
    },
    {
        id: 2,
        image: imgJ,
        title: "Til shunoslik",
        text: "Ways to strengthen financial in the rational USE of state..."
    },
    {
        id: 3,
        image: imgJ,
        title: "Til shunoslik",
        text: "Ways to strengthen financial in the rational USE of state..."
    },
    {
        id: 4,
        image: imgJ,
        title: "Til shunoslik",
        text: "Ways to strengthen financial in the rational USE of state..."
    },
    {
        id: 5,
        image: imgJ,
        title: "Til shunoslik",
        text: "Ways to strengthen financial in the rational USE of state..."
    },
    {
        id: 6,
        image: imgJ,
        title: "Til shunoslik",
        text: "Ways to strengthen financial in the rational USE of state..."
    },
];

import Image from "next/image";

const ElJournal = () => {
    return (
        <ul className="ElJournal__list">
            {
                EJournalArr && EJournalArr.map((e) => (
                    <li className="ElJournal__listItem" key={e.id}>
                        <Image className="ElJournal__list--img" src={e.image} alt="img" />
                        <div className="ElJournal__list--info">
                            <h3 className="ElJournal__list--title">{e.title}</h3>
                            <p className=" ElJournal__list--text">{e.text}</p>
                        </div>
                    </li>
                ))
            }
        </ul>

    )
}

export default ElJournal; 
