const Pagination = ({bannerActive, i, setBannerClicked}) => {
    return ( 
        <div  
            className={`Banner__pagina ${bannerActive === i && "active"}`} 
            onClick={() => setBannerClicked(i)}
        ></div>
     );
}
 
export default Pagination;