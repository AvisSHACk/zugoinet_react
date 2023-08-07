import BannerItem from "./BannerItem";
import banner1 from "./../assets/banners/banner-1.jpg";
import banner2 from "./../assets/banners/banner-2.jpg";
import banner3 from "./../assets/banners/banner-3.jpg";
import banner4 from "./../assets/banners/banner-4.jpg";
import useTrending from "./../hooks/useTrending";
import useBannerActive from "../hooks/useBannerActive";
import Pagination from "./Pagintation";

const BANNER_IMAGES = [
    banner1,
    banner2,
    banner3,
    banner4
]

const Banner = () => {
    const {trending} = useTrending();
    const {bannerActive, setBannerClicked} = useBannerActive();

    // console.log(trending);
    return ( 
        <section className="Banner">
            <div className="Banner__container">
                {trending.map((anime, index) => {
                    if(index <= 3) return <BannerItem 
                                    key={anime.id} 
                                    anime={anime} 
                                    images={BANNER_IMAGES}
                                    index={index}
                                    active={bannerActive === index}
                                />  
                })}
            </div>
            <div className="Banner__paginacion">
                {trending.map((anime, i) => {
                    if(i <= 3) return <Pagination 
                                    key={i}
                                    i={i}
                                    bannerActive={bannerActive} 
                                    setBannerClicked={setBannerClicked}
                                />
                })}
            </div>
        </section>
     );
}
 
export default Banner;