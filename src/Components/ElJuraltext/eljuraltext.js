const ElJournalArr = [
    {
        id: 1,
        title: "Fayzullaev Xolmo'min, Qarshi davlat universiteti o'qituvchisi / Qissada ....",
        text: "Xodjayev Erkin",
        data: " 14 MAR 2022"
    },
    {
        id: 2,
        title: "Fayzullaev Xolmo'min, Qarshi davlat universiteti o'qituvchisi / Qissada ....",
        text: "Xodjayev Erkin",
        data: " 14 MAR 2022"
    },
    {
        id: 3,
        title: "Fayzullaev Xolmo'min, Qarshi davlat universiteti o'qituvchisi / Qissada ....",
        text: "Xodjayev Erkin",
        data: " 14 MAR 2022"
    },
    {
        id: 4,
        title: "Fayzullaev Xolmo'min, Qarshi davlat universiteti o'qituvchisi / Qissada ....",
        text: "Xodjayev Erkin",
        data: " 14 MAR 2022"
    },
    {
        id: 5,
        title: "Fayzullaev Xolmo'min, Qarshi davlat universiteti o'qituvchisi / Qissada ....",
        text: "Xodjayev Erkin",
        data: " 14 MAR 2022"
    },
    {
        id: 6,
        title: "Fayzullaev Xolmo'min, Qarshi davlat universiteti o'qituvchisi / Qissada ....",
        text: "Xodjayev Erkin",
        data: " 14 MAR 2022"
    },

];

const ElJournalText = () => {
    return (
        <>
            <ul className="elJurnal__wrapper">
                {
                    ElJournalArr && ElJournalArr.map(e => (
                        <li className="elJurnal__wrapper--item" key={e.id}>
                            <h4 className="elJurnal__wrapper--title">{e.title}</h4>
                            <p className="elJurnal__wrapper--text">{e.text}</p>
                            <span className="elJurnal__wrapper--data"> {e.data}</span>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default ElJournalText;