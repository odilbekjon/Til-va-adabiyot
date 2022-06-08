import Image from "next/image";

const Book = (Arr) => {
    return (
        <>
            <ul className="Book__list">
                {
                    Arr.Arr && Arr.Arr.map((e) => (
                        <li className="Book__list--item" key={e.id}>
                            <Image src={e.img} alt="img" />
                            <h3 className="Book__list--title">{e.title}</h3>
                            <p className="Book__list--articl">Artikul:{e.articl}</p>
                            <div className="Book__list--btm">
                                <span className="Book__list--data">{e.data}</span>
                                <a className="Book__list--download"></a>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Book;