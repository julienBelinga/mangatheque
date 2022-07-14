import Img from "@assets/img404.jpg";
import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "@css/notFound.scss"

export default function NotFound(){
    return(
        <div id="not-found">
            <img src={Img} />
            <article>
                <h1>Page non existante</h1>
                <p>Oups, on n'a rien trouvé à cette adresse... Vous pouvez revenir sur la <Link to="/">page d'accueil</Link></p>
            </article>
        </div>
    )
}