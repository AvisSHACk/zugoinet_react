const Menu = () => {
    return ( 
        <nav className="Menu">
            <ul>
                <li className="Menu__item active"><span className="material-icons-sharp">home</span><a href="#" className="Menu__link">INICIO</a></li>
                <li className="Menu__item"><span className="material-icons-sharp">search</span><a href="#" className="Menu__link">BUSQUEDAD</a></li>
                <li className="Menu__item"><span className="material-icons-sharp">playlist_play</span><a href="#" className="Menu__link">MIS LISTAS</a></li>
            </ul>
        </nav>
     );
}
 
export default Menu;