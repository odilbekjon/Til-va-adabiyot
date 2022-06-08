
import img1 from "../../Assets/img/Rectangle 3306.png";
import img2 from "../../Assets/img/Rectangle.png";
import img3 from "../../Assets/img/Rectangle1.png";

const BooksArr = [
    {
        id: 1,
        img: img1,
        title: "What it means for a woman to be cut – and will FGM end any time ",
        text: "Prince Charles welcomed his mother's wish that Camilla, Duchess of Cornwall, be known as Queen Consort when he...",
        date: "06/02/2022",
        time: "11:15",
        follow: 222
    },
    {
        id: 2,
        img: img2,
        title: "What it means for a woman to be cut – and will FGM end any time ",
        text: "Prince Charles welcomed his mother's wish that Camilla, Duchess of Cornwall, be known as Queen Consort when he...",
        date: "06/02/2022",
        time: "11:15",
        follow: 222
    },
    {
        id: 3,
        img: img3,
        title: "What it means for a woman to be cut – and will FGM end any time ",
        text: "Prince Charles welcomed his mother's wish that Camilla, Duchess of Cornwall, be known as Queen Consort when he...",
        date: "06/02/2022",
        time: "11:15",
        follow: 222
    }
]


import Image from "next/image";

const Books = () => {
    return (
        <>
            <div className="books_wrapper">
                {
                    BooksArr &&
                    <div className="book_wrapper1">

                        <Image className="book_wrapper1--img1" src={BooksArr[0].img} alt="img" />

                        <div className="book_wrapper1--info1">
                            <h3 className="book_wrapper1--title">
                                {BooksArr[0].title}
                            </h3>
                            <p className="book_wrapper1--text">
                                {BooksArr[0].text}
                            </p>
                            <div className="book_wrapper--detals">{BooksArr[0].date}</div>
                            <div className="d2 book_wrapper--detals">{BooksArr[0].time}</div>
                            <div className="d3 book_wrapper--detals ">{BooksArr[0].follow}</div>
                        </div>
                    </div>
                }
                <div>
                    {
                        BooksArr && BooksArr.slice(1).map((e) => (

                            <div key={e.id} className="book_wrapper">

                                <Image className="book_wrapper--img" src={e.img} alt="img" />

                                <div className="book_wrapper--info">
                                    <h3 className="book_wrapper--title">
                                        {e.title}
                                    </h3>
                                    <p className="book_wrapper--text">
                                        {e.text}
                                    </p>
                                    <div className="book_wrapper--detals">{e.date}</div>
                                    <div className="d2 book_wrapper--detals">{e.time}</div>
                                    <div className="d3 book_wrapper--detals ">{e.follow}</div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Books; 