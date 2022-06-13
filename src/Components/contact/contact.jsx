import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

const Contact = () => {
    
    const {
        count:{lang}
    } = useSelector((state) => state);
    
    const { contact: con } = Content[lang];

    return (
        <>
            <div className="contact__wrapper">
                <ul className="contact__wrapper--left">
                    <li className="contact__wrapper--left--item">
                        <a className="contact__wrapper--left--link">
                            <div className="contact__wrapper--left--info">
                                <div>
                                    <h4 className="contact__wrapper--title">{con.title2}</h4>
                                    <p className="contact__wrapper--text">+998 94 625 85 24</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="contact__wrapper--left--item">
                        <a className="contact__wrapper--left--link">
                            <div className="contact__wrapper--left--info contact__wrapper--left--info2">
                                <div>
                                    <h4 className="contact__wrapper--title">{con.title3}</h4>
                                    <p className="contact__wrapper--text">logeekascience@gmail.com</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="contact__wrapper--left--item">
                        <a className="contact__wrapper--left--link">
                            <div className="contact__wrapper--left--info contact__wrapper--left--info3">
                                <div>
                                    <h4 className="contact__wrapper--title">{con.title4}</h4>
                                    <p className="contact__wrapper--text">logeekascience</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="contact__wrapper--left--item">
                        <a className="contact__wrapper--left--link">
                            <div className="contact__wrapper--left--info contact__wrapper--left--info4">
                                <div>
                                    <h4 className="contact__wrapper--title">{con.title5}</h4>
                                    <p className="contact__wrapper--text">Logeekascince</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="contact__wrapper--left--item">
                        <a className="contact__wrapper--left--link">
                            <div className="contact__wrapper--left--info contact__wrapper--left--info5">
                                <div>
                                    <h4 className="contact__wrapper--title">{con.title6}</h4>
                                    <p className="contact__wrapper--text">Logeekascince</p>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
                <div className="contact__wrapper--right">
                    <h2 className="contact__wrapper--right--title">{con.title7}</h2>
                    <p className="contact__wrapper--right--text">{con.title8}</p>

                    <form className="contact__wrapper--right--form" method="POST">
                        <input className="contact__wrapper--right--input" type="text" placeholder="Your name" required />
                        <input className="contact__wrapper--right--input" type="email" placeholder="Email address" required />
                        <input className="contact__wrapper--right--input" type="number" placeholder="Phone number" required />
                        <input className="contact__wrapper--right--input" type="text" placeholder="Telegram" required />
                        <textarea className="contact__wrapper--right--input contact__wrapper--right--input--message" />
                        <button className="contact__wrapper--right--btn">{con.title7}</button>
                    </form>
                </div>
            </div>
            <div className="Adress">
                <iframe className="Adress__iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47927.00615979209!2d69.2187951!3d41.3428351!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d1799efe535%3A0x87ab82849ac5c858!2sG&#39;alaba%20bog&#39;i!5e0!3m2!1sru!2s!4v1653965478518!5m2!1sru!2s" height="560"></iframe>
            </div>
        </>
    )
}

export default Contact;