const BannerItem = ({anime, images, index, active}) => {
    return ( 
        // <div className="Banner__item" style={{display: active && "block"}}>
        <div className={`Banner__item ${active ? "active" : ""}`}>
                <figure>
                    {/* <img src={anime.attributes.coverImage.original} alt="" /> */}
                    <img src={images[index]} alt="" />
                    <div className="Banner__mask"></div>
                </figure>
                <div className="Banner__container">
                    <div className="l-container">
                        <div className="Banner__info">
                            <h2 className="Banner__title">
                                <a href="#">
                                    <h2>{anime.attributes.titles.en_jp}</h2>
                                    {/* <img className="Banner__logo"src="img/logos/shield.png" alt="" /> */}
                                </a>
                            </h2>
        
                            <div className="Banner__etiquetas">
                                <a href="#" className="Banner__etiqueta">{anime.type}</a>
                                <a href="#" className="Banner__etiqueta">{anime.attributes.status}</a>
                            </div>
        
                            <div className="Banner__description">
                                <p>{anime.attributes.synopsis.slice(0, 300)}...</p>
                            </div>
        
                            <div className="Banner__buttons">
                                <a href="#" className="Banner__play"><span className="material-icons-sharp">play_arrow</span></a>
                                <a href="#" className="Banner__moreinfo"><span className="material-icons-sharp">info</span>MAS INFO</a>
                                <a href="#" className="Banner__addlist"><span className="material-icons-sharp">playlist_add</span>AGREGAR A MI LISTA</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default BannerItem;