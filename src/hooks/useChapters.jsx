import { useEffect, useState } from "react";
import fetchData from "../functions/fetchData";
const useChapters = () => {
    const [chapters, setChapters] = useState([]);
    useEffect(() => {
        fetchData('https://kitsu.io/api/edge/anime/12/episodes')
        .then(chapters => setChapters(chapters))
    }, [])

    return {chapters};
}
 
export default useChapters;