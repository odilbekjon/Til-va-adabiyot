
import Image from "next/image";

const Journallar = (Arr) => {
    return (
        <ul className="Journallar__list">
            {
                Arr.JournallarAr && Arr.JournallarAr.map((e) => (
                    <li className="Journallar__list--item" key={e.id}>
                        <Image src={e.image} alt="img" />
                        <h4 className="Journallar__list--title">{e.title}</h4>
                        <p className="Journallar__list--price">{e.price}</p>
                        <div className="Journallar__list--botton">
                            <span className="Journallar__list--data">{e.date}</span>
                            <button className="Journallar__list--btn" type="submit">Sotib olish</button>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default Journallar;