import logoimg from '../assets/logos/logo.png'
const logo = () => {
    return ( 
        <h1 className="Logo">
            <a href="#">
                <img className="" src={logoimg} alt="Zugoi" title="Zugoi.net" />
            </a>
        </h1>
     );
}
 
export default logo;