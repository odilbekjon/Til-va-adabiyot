import React from "react";
import Image from "next/image";
import Link from "next/link";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";



// images
import Img1 from "../../Assets/images/logo.png";
import Facebook from "../../Assets/images/Facebook.png";
import Instagram from "../../Assets/images/instagram.png";
import Twitter from "../../Assets/images/twitter.png";
import Telegram from "../../Assets/images/telegram.png";

function Footer() {

  const {
    count:{lang}
  } = useSelector((state) => state);

  const { footer: f } = Content[lang];

  return (
    <>
    <section className="">
      <div className="container">
        <div className="footer__top footer__top--section">
            <h1 className="footer__top--head">{f.title1}</h1>
            <p className="footer__top--title">{f.title2}</p>
            <form className="footer__top--form">
                <input className="footer__top--input" type="text" name="" id="" placeholder="Email Address" />
                <button type="submit" className="footer__top--btn">{f.title3}</button>
            </form>
        </div>
      </div>
    </section>
    <section className="footer">
      <div className="container">
        <div className="footer__box">
          <div className="footer__wrapper">
            <Link href="/">
              <a className="header__head">
                <Image className="header__img1" src={Img1} width={109} height={109} alt="header_logo"/>
                <h2 className="footer__title">«Til va adabiyot ta’limi»</h2>
              </a>
            </Link>
            <p className="footer__text">
              Copyright © 1991 «Til va adabiyot ta’limi» – «Преподавание языка и
              литературы» – «Language and literature teaching»
            </p>
          </div>
          <ul className="footer__list">
              <li className="footer__item"><Link  href="#"><a className="footer__item--link">{f.link1}</a></Link></li>
              <li className="footer__item"><Link  href="#"><a className="footer__item--link" >{f.link2}</a></Link></li>
              <li className="footer__item"><Link  href="#"><a className="footer__item--link">{f.link3}</a></Link></li>
              <li className="footer__item"><Link  href="#"><a className="footer__item--link">{f.link4}</a></Link></li>
          </ul>
          <ul className="footer__list list_bottom">
              <li className="footer__item"><Link  href="#"><a className="footer__item--link" >{f.link5}</a></Link></li>
              <li className="footer__item"><Link  href="#"><a className="footer__item--link">{f.link6}</a></Link></li>
              <li className="footer__item"><Link  href="#"><a className="footer__item--link">{f.link7}</a></Link></li>
          </ul>
          <ul className="footer__list list_bottom">
              <li className="footer__item"><Link  href="#"><a className="footer__item--link" >{f.link8}</a></Link></li>
              <li className="footer__item"><Link  href="#"><a className="footer__item--link">{f.link9}</a></Link></li>
              <li className="footer__item"><Link  href="#"><a className="footer__item--link">{f.link10}</a></Link></li>
          </ul>
        </div>
            <hr className="hr" />
        <div className="footer__bottom">
            <div className="footer__bottom--titles">
             <p className="footer__span">Illustration graphic art design format</p>
             <p className="footer__bottom--title">Public domain license</p>
            </div>
            <div className="footer__bottom--links">
                <div className="footer__image"><a className="footer__link" href=""><Image src={Facebook} width={13} height={20} /></a></div>
                <div className="footer__image"><a className="footer__link2" href=""><Image src={Instagram} width={20} height={20} /></a></div>
                <div className="footer__image"> <a className="footer__link2" href=""><Image src={Twitter} width={20} height={20} /></a></div>
                <div className="footer__image"><a className="footer__link2" href=""><Image src={Telegram} width={20} height={20} /></a></div>
            </div>
            <div className="footer__bottom--titles">
             <p className="footer__span">Illustration graphic art design format</p>
             <p className="footer__bottom--title right">Public domain license</p>
            </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Footer;
