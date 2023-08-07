import Menu from './Menu';
import Logo from './Logo';
import User from './User';
const Header = () => {
    return ( 
        <header className="Header">
            <div className="Header__container l-container">
                <Logo/>
                <Menu/>
                <User />
            </div>
        </header>
     );
}
 
export default Header;