import { useRef } from "react";
import move from "../functions/move";
import Chapter from "./Chapter";
import Serie from "./Serie";

const Cards = ({ data, type, variant }) => {
    const containerCa = useRef();
    const track = useRef();
    return (
        <section className="Cards">
            <div className="l-container">
                <div className="Cards__header">
                    <h4 className="Cards__title h4">¡Hola Anthony! Continua viendo anime</h4>
                    {type === "chapter" &&
                        <a href="#">
                            VER HISTORIAL
                            <span className="material-icons-sharp">chevron_right</span>
                        </a>
                    }

                </div>
                <div className="Cards__track" ref={track}>
                    <button className="prev" onClick={() => move(0, containerCa, track)}>{"<"}</button>
                    <div className="Cards__container" ref={containerCa}>
                        {type == "chapter" && data.map(chapter => {
                            return <Chapter key={chapter.id} data={chapter} />
                        })}

                        {type == "serie" && data.map(serie => {
                            return <Serie key={serie.id} data={serie} type={type} variant={variant}/>
                        })}
                    </div>
                    <button className="next" onClick={() => move(1, containerCa, track)}>{">"}</button>
                </div>
            </div>
        </section>
    );
}

export default Cards;