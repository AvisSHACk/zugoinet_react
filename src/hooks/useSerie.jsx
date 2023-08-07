import { useEffect, useState } from "react";
import fetchData from "../functions/fetchData";

const useSerie = (filter = undefined) => {
    const [serie, setSerie] = useState([]);
    let URL_FETCH = "https://kitsu.io/api/edge/anime"

    if(filter) {
        URL_FETCH += `?filter[categories]=${filter}`
    }

    useEffect(() => {
        fetchData(URL_FETCH)
        .then(serie => setSerie(serie))
    }, [])
    return [serie];
}
 
export default useSerie;