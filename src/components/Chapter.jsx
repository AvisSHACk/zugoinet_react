const Chapter = ({data}) => {
    return (
        <div className="Card">
            <a href="#" className="Card__imagecontainer">
                <img className="Card__image" src={data.attributes.thumbnail.original} alt="" />
                <div className="Card__mask Card__mask--continuarviendo">
                    <span className="material-icons-sharp Card__play Card__play--continuarviendo">play_arrow</span>
                    <div className="Card__time">
                        <p className="Card__minutes">19 min restantes</p>
                        <div className="Card__bar"><div className="Card__progress"> </div></div>
                    </div>
                </div>
            </a>
            <div className="Card__info">
                <p className="Card__title Card__title--continuarviendo">SPY FAMILY</p>
                <h4 className="Card__numbercap">{`T1 E${data.attributes.number} . ${data.attributes.titles.en_jp}`}</h4>
            </div>
        </div>
    );
}

export default Chapter;