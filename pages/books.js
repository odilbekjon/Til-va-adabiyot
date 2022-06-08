import Book from "../src/Components/book/book";
import Search from "../src/Components/search/search";
import BookArr from "../faceBackend/book"

const Books = () => {
    return (
        <>
            <section className="Search">
                <div className="container">
                    <Search text="Bosma Jurnal" />
                </div>
            </section>
            <section className="Book">
                <div className="container">
                    <h3 className="Book_title">
                        Kitoblar
                    </h3>
                    <Book Arr={BookArr} />
                </div>
            </section>
            <section className="Media">
                <div className="container">
                    <h3 className="Media_title">
                        Media kontent
                    </h3>
                </div>
            </section>
        </>
    )
}

export default Books;