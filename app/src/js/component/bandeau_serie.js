import React, {useState,useEffect} from "react";
import tomeNaruto from "@assets/Naruto_tome_1.jpg"
import { Link } from "react-router-dom";
import "@css/bandeau_serie.scss";

export default function Bandeau_serie(){
    return(
        <div class="serie-header">
            <img src={tomeNaruto} alt="couverture manga" />
            <div class="header-description">
                <h2>Naruto</h2>
                <p><strong>synopsis :</strong> <br></br>Naruto est un garçon un peu spécial. 
                    Solitaire au caractère fougueux, il n'est pas des plus appréciés dans son village. Malgré cela,
                    il garde au fond de lui une ambition: celle de devenir un "maître Hokage", la plus haute distinction dans l'ordre des ninjas, 
                    et ainsi obtenir la reconnaissance de ses pairs mais cela ne sera pas de tout repos ... 
                    Suivez l'éternel farceur dans sa quête du secret de sa naissance et de la conquête des fruits de son ambition !</p>
                <ul>
                    <li><strong>nombre de tome :</strong> tome 72</li>
                    <li><strong>auteur :</strong> masashi kishimoto</li>
                    <li><strong>date de parution :</strong> 2000</li>
                </ul>
                <Link to="">Ajouter</Link>
            </div>
        </div>
    )
}