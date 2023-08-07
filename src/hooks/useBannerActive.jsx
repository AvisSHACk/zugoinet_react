import { useEffect, useState } from "react";

const useBannerActive = () => {

    const [bannerActive, setBannerActive] = useState(0);
    const setBannerClicked = (i) => setBannerActive(i)

    const bannerAuto = () => {
        const intervalActive = setInterval(() => {
            if(bannerActive >= 3) {
                setBannerActive(0)
                return
            }
            setBannerClicked(bannerActive + 1)

        }, 4000)

        return () => {
            clearInterval(intervalActive);
        };
    }

    useEffect(bannerAuto, [bannerActive])

    return {bannerActive, setBannerClicked};
}
 
export default useBannerActive;