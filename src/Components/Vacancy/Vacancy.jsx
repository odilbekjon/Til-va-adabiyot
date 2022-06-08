import Link from "next/link"

export default function Vacancy(){
    return(
        <section>
            <div className="container">
                <div className="vacancy">
                    <div className="vacancy__header">
                        <Link href={'/'}><a className='aside__link' >Bosh sahifa</a></Link>
                        <span className='aside__span'> | Bosma jurnal</span>
                    </div>
                    <div className="vacancy__wrapper">
                        <div className="vacancy__left">
                            <div className="left__wrapper">
                                <Link href={'/article'}><a className="wrapper__link--new2">Talablar</a></Link>
                                <Link href={'/vacancy'}><a className="wrapper__link--new">Narxlar</a></Link>
                            </div>
                        </div>
                        <div className="vacancy__right">
                            <h1 className="vacancy__head">Ваканции</h1>
                            <ul className="vacancy__list">
                                <li className="vacancy__item">
                                    <h2 className="vacancy__item--head">Требуется Ux дизайнер</h2>
                                    <p className="vacancy__item--title">- Опыт работы дизайнером (веб, десктоп или мобильных интерфейсов) от года...</p>
                                    <span className="vacancy__item--span">10 000 000 uzs dan – 12 000 000 uzs gacha</span>
                                    <button className="vacancy__item--btn">ОткликнутсЯ</button>
                                </li>
                                <li className="vacancy__item">
                                    <h2 className="vacancy__item--head">Требуется Ux дизайнер</h2>
                                    <p className="vacancy__item--title">- Опыт работы дизайнером (веб, десктоп или мобильных интерфейсов) от года...</p>
                                    <span className="vacancy__item--span">10 000 000 uzs dan – 12 000 000 uzs gacha</span>
                                    <button className="vacancy__item--btn">ОткликнутсЯ</button>
                                </li>
                            </ul>
                            <ul className="vacancy__list">
                                <li className="vacancy__item">
                                    <h2 className="vacancy__item--head">Требуется Ux дизайнер</h2>
                                    <p className="vacancy__item--title">- Опыт работы дизайнером (веб, десктоп или мобильных интерфейсов) от года...</p>
                                    <span className="vacancy__item--span">10 000 000 uzs dan – 12 000 000 uzs gacha</span>
                                    <button className="vacancy__item--btn">ОткликнутсЯ</button>
                                </li>
                                <li className="vacancy__item">
                                    <h2 className="vacancy__item--head">Требуется Ux дизайнер</h2>
                                    <p className="vacancy__item--title">- Опыт работы дизайнером (веб, десктоп или мобильных интерфейсов) от года...</p>
                                    <span className="vacancy__item--span">10 000 000 uzs dan – 12 000 000 uzs gacha</span>
                                    <button className="vacancy__item--btn">ОткликнутсЯ</button>
                                </li>
                            </ul>
                            <ul className="vacancy__list">
                                <li className="vacancy__item">
                                    <h2 className="vacancy__item--head">Требуется Ux дизайнер</h2>
                                    <p className="vacancy__item--title">- Опыт работы дизайнером (веб, десктоп или мобильных интерфейсов) от года...</p>
                                    <span className="vacancy__item--span">10 000 000 uzs dan – 12 000 000 uzs gacha</span>
                                    <button className="vacancy__item--btn">ОткликнутсЯ</button>
                                </li>
                                <li className="vacancy__item">
                                    <h2 className="vacancy__item--head">Требуется Ux дизайнер</h2>
                                    <p className="vacancy__item--title">- Опыт работы дизайнером (веб, десктоп или мобильных интерфейсов) от года...</p>
                                    <span className="vacancy__item--span">10 000 000 uzs dan – 12 000 000 uzs gacha</span>
                                    <button className="vacancy__item--btn">ОткликнутсЯ</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}