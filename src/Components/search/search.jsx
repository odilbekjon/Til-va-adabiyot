import Link from "next/link"

const Search = ({ text }) => {
    return (
        <div className="search__wrapper">
            <div className="search__wrapper--title">
                <Link href="/">
                    <a className="search__wrapper--link">Bosh sahifa</a>
                </Link>  |
                <span className="search__title--left">{text}</span>
            </div>
            <div className="select">
                <select className="selects">
                    <option value="May">May</option>
                    <option value="May">May</option>
                    <option value="May">May</option>
                </select>
                <select className="selects">
                    <option value="2022">2022</option>
                    <option value="2022">2022</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    )
}

export default Search;