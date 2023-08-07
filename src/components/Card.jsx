const Card = ({ data, type, isBig }) => {
    // console.log(data.attributes.posterImage.original);
    if (type === "chapter") {
        return (
            <div className="Card">
                <a href="#" className="Card__imagecontainer" style={{height: type === "chapter" && "140px"}}>
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
                    <h4 className="Card__numbercap">T1 E11 . Stella</h4>
                </div>
            </div>
        );
    }

    if (type === "serie") {
        return (
            <div className={`Card ${isBig ? "Card--big" : ""}`}>
                <a href="#" className="Card__imagecontainer" style={{height: isBig ? "289px" : "140px"}}>
                    <img className="Card__image" src={data.attributes.posterImage.small} alt="" />
                    <div className="Card__mask">
                        <div className="Card__info">
                            <h4 className="Card__title">Spy Family</h4>
                            <p className="Card__categorias">Comedia . Espias . Romance</p>
                        </div>
                        <p className="Card__raiting">4.8 <span className="material-icons-sharp">star</span></p>
                        <span className="material-icons-sharp Card__play">play_arrow</span>
                        <span className="material-icons-sharp Card__playlist">playlist_add</span>
                    </div>
                </a>
            </div>
        );

    }
}

export default Card;