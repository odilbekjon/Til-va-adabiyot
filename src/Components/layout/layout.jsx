
// components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  // const langValue = useRef();

  // const dispatch = useDispatch();

  // const {
  //   count: { lang },
  // } = useSelector((state) => state);

  // function getLang() {
  //   dispatch({ type: window.localStorage.getItem("lang") || "uz" });
  // }

  // langValue.current = getLang;

  // useEffect(() => {
  //   langValue.current();
  // }, []);

  return (
    <>
      <header className="header">
        <Header/>
      </header>

      <main>
        {children}
      </main>
  
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Layout;