const Serie = ({ data, variant}) => {
    return (
        <div className={`Card ${variant ? `Card--${variant}` : ""}`}>
            <a href="#" className="Card__imagecontainer">
                <img className="Card__image" src={data.attributes.posterImage.small} alt="" />
                <div className="Card__mask">
                    <div className="Card__info">
                        <h4 className="Card__title">{data.attributes.titles.en_jp}</h4>
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

export default Serie;