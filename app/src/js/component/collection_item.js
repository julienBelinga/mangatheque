import React, {useState,useEffect} from "react";
import "@css/collectionItem.scss";
import tomeNaruto from "@assets/Naruto_tome_1.jpg"
import { Link } from "react-router-dom";

export default function collection_item(){
    return(
        <div class="collection-container">
            <img src={tomeNaruto} alt="couverture manga" />
            <div class="description">
                <h3>Naruto</h3>
                <ul>
                    <li>tome 72</li>
                    <li>masashi kishimoto</li>
                    <li>2000</li>
                </ul>
                <Link to="/detailSerie">voir plus</Link>
            </div>
        </div>
    )
}

// const AxiosClientManga = axios.create({
//     baseURL: "http://localhost:8080/api/manga",
// } )

// export const createManga = async (url) => {
// let res = await AxiosClientManga.get(url)
// return { data: res.data, status: res.status, statusText: res.statusText }
// }

// Pour utiliser la fonction :
// createManga( "/url" )
// Cette fonction déclenchera une requete à l'url : http://localhost:8080/api/manga/url