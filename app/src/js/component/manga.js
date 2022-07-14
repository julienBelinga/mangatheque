import React, {useState,useEffect} from "react";
import "@css/manga.scss";
import tomeNaruto from "@assets/Naruto_tome_1.jpg"
import { Link } from "react-router-dom";

export default function manga(){
    return(
        <div class="manga-container">
            <img src={tomeNaruto} alt="couverture manga" />
            <div class="manga-description">
                <h3>Naruto</h3>
                <ul>
                    <li>tome 1</li>
                    <li>masashi kishimoto</li>
                    <li>2000</li>
                </ul>
                <Link to="">supprimer</Link>
            </div>
        </div>
    )
}
// const mangaObject = () => {
//     const [manga, setManga] = useState([]);
//     useEffect(() => {
//         fetch("https://api.jikan.moe/v3/manga/1")
//         .then(res => res.json())
//         .then(data => setManga(data))
// }, []);
//     return manga;
// }

// function generateMangaMini(manga){
//     return manga.map(manga => {
//         return(
//             <li>
//                 <h4>{manga.title}</h4>
//                 <p>{manga.description}</p>
//             </li>
//         )
//     }
//     )
// }
// //call API to get manga
// function getManga(){
//     fetch("https://api.jikan.moe/v3/manga/1")
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// //generate list of manga
// function generateMangaList(manga){
//     return manga.map(manga => {
//         return (
//         <div className="manga-container">
//             {manga.map(manga => (
//                 <div className="manga-description">
//                     <h3>{manga.title}</h3>
//                     <ul>
//                         <li>{manga.title_japanese}</li>
//                         <li>{manga.type}</li>
//                         <li>{manga.volumes}</li>
//                         <li>{manga.chapters}</li>
//                         <li>{manga.publishing_status}</li>
//                         <li>{manga.score}</li>
//                         <li>{manga.start_date}</li>
//                         <li>{manga.end_date}</li>
//                         <li>{manga.synopsis}</li>
//                     </ul>
//                     <Link to="">supprimer</Link>
//                 </div>
//             ))}
//         </div>
//         );
//     });
// }
