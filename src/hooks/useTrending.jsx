import { useEffect, useState } from "react";

const useTrending = () => {

    const [trending, setTrending] = useState([]);

    useEffect(() => {
        fetch('https://kitsu.io/api/edge/trending/anime')
        .then(response => response.json())
        .then(json => setTrending(json.data))
    }, []);
    return {trending};
}
 
export default useTrending;