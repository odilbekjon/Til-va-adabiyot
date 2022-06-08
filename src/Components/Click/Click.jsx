import Image from 'next/image'

// images
import Clicks from '../../Assets/images/click.png';
import ClickImg1 from '../../Assets/images/click-img1.png';
import ClickImg2 from '../../Assets/images/click-img2.png';
import ClickImg3 from '../../Assets/images/click-img3.png';

export default function Click() {
    return(
        <section className='click__section'>
            <div className="container">
                <div className="click">
                    <div className="click__left">
                     <Image className='click__left--img1' src={Clicks} width={350} height={110} alt="" />
                        <button className='click__left--btn1'>
                            <Image className='click__left--img' src={ClickImg1} width={48} height={48} />
                            <p className='click__left--title'>Qr kodni skanerlang</p> 
                        </button>
                        <button className='click__left--btn2'>
                            <Image className='click__left--img2' src={ClickImg2} width={36} height={36} /> 
                            <div className="">
                            <p className='click__left--head'>USSD so’rovinomani tering</p>
                            <p className='click__left--num'>*880 * 016832 * SUMMA #</p> 
                            </div>
                        </button>
                    </div>
                    <div className="click__right">
                        <Image className='click__right--img' src={ClickImg3} width={241} height={232} />
                        <h2 className='click__right--head'>To’lovlar uchun 2 qulay usul</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}