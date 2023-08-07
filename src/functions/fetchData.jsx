const fetchData = (url) => {
    return fetch(url)
            .then(response => response.json())
            .then(json => {
                const {data} = json;
                return data
            })
}
 
export default fetchData;