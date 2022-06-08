import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";


// images
import Img1 from '../../Assets/images/logo.png';

 
function Header() {

  const langValue = useRef()
  
  const dispatch = useDispatch()

  const {
    count:{lang}
  } = useSelector((state) => state);

  function getLang() {
    dispatch({ type: window.localStorage.getItem('lang') || 'uz' });
  }

  langValue.current = getLang;

  useEffect(() => {
    langValue.current();
  }, []);

  const { header: h } = Content[lang];

  return (
    <>
      <div className="container">
          <div className="header__box">
              <div className="header__head">
                <Link href='/'>
                <a className='header__head'>
                <Image className='header__img1' src={Img1} width={64} height={64} alt="header_logo" />
                <h1 className='header__title'>Til va adabiyot.uz</h1>
                </a></Link>
              </div>
              <form className='header__form'>
                  <div className="form__input">
                   <input className='header__input' type="text" placeholder='Qidirish'  />
                    {/* <Image src={Img2} width={20} height={20} alt="" /> */}
                  </div>
              </form>
              <ul className='header__list'>
                  <li className='header__item'><Link href='/about'><a className='header__link'>{h.title1}</a></Link></li>
                  <li className='header__item'><Link href='/'><a className='header__link'>{h.title2}</a></Link></li>
              </ul>
              <select onChange={(e) => dispatch( {type: e.target.value })} className='header__select' name="" id="">
                  <option className='header__option' value="uz">Uzb</option>
                  <option className='header__option' value="en">Eng</option>
                  <option className='header__option' value="ru">Rus</option>
              </select>
              <button className='header__btn'>{h.title3}</button>
          </div>
      </div> 
    </>
  )
}

export default Header;