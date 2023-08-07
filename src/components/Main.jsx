
import useChapters from "../hooks/useChapters";
import useSerie from "../hooks/useSerie";
import Cards from "./Cards";

const Main = () => {
    const {chapters} = useChapters();
    const [serie] = useSerie();
    const [action] = useSerie("action");
    const [comedy] = useSerie("comedy");
    const [adventure] = useSerie("adventure");

    return ( 
        <main>
            <Cards data={chapters} type={"chapter"}/>
            <Cards data={serie} type={"serie"} variant={"big"}/>
            <Cards data={action} type={"serie"} />
            <Cards data={comedy} type={"serie"} />
            <Cards data={adventure} type={"serie"} variant={"tall"}/>
        </main>
     );
}
 
export default Main;