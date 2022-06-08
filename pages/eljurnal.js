import ElJournalTex from "../src/Components/ElJuraltext/eljuraltext";
import Search from "../src/Components/search/search";
import Journallar from "../src/Components/journallar/Journallar"
import Seemore from "../src/Components/seemore/seemore"
import JournallarArr from "../faceBackend/jurnal"
const Eljural = () => {
    return (
        <>
            <section className="Search">
                <div className="container">
                    <Search text="ELEKTRON JURNAL" />
                </div>
            </section>
            <section className="ElJurnal">
                <div className="container">
                    <h2 className="ElJurnal__title">Til shunoslik    Elektron journal</h2>
                    <ElJournalTex />
                </div>
            </section>
            <section className="Journallar">
                <div className="container">
                    <h3 className="Journallar__title">
                        Journallar
                    </h3>
                    <Journallar JournallarAr={JournallarArr.slice(0, 4)} />
                    <Seemore />
                </div>
            </section>
        </>
    )
}

export default Eljural;