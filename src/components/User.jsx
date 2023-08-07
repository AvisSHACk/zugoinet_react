import userimg from '../assets/user.jpg'

const User = () => {
    return ( 
        <div className="User">
            <p className="User__username"><span className="material-icons-sharp">notifications</span> usuario</p>
            <div className="User__image">
                <img src={userimg} alt="" />
            </div>
            <span className="User__arrow material-icons-sharp">expand_more</span>

            <div className="User__nav">
                <ul>
                    <li className="User__item"><a href="#" className="User__link">Mi cuenta</a></li>
                    <li className="User__item"><a href="#" className="User__link">Cerrar sesion</a></li>
                </ul>
            </div>
        </div>
     );
}
 
export default User;