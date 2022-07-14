import React, {useState,useEffect} from "react";
import Collection from '../component/collection_item';
import "@css/grid.scss";
import Header from "../component/bandeau_serie";
import Manga from "../component/manga";

export default function DetailsSerie(){
    return(
        <>
            <Header />
            <div id="liste-manga">
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
                <Manga />
            </div>
        </>
    );
}