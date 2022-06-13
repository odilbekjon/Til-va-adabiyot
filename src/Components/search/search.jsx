import Link from "next/link";
import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

const Search = ({ text }) => {

    const {
        count:{lang}
      } = useSelector((state) => state);
    
      const { literature: li } = Content[lang];

    return (
        <div className="search__wrapper">
            <div className="search__wrapper--title">
                <Link href="/">
                    <a className="search__wrapper--link">{li.title1}</a>
                </Link>  | {li.title2}
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