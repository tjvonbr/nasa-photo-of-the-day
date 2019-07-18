import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function NasaGrid({ limit }) {
    const [nasaPic, setNasaPic] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1")
            .then(response => {
                console.log(response);
                setNasaPic(response.data[0])
            })
            .catch(error => {
                console.log('Error', error)
            })
    }, []);

    return (
        <div className="nasa-grid">
            <p className="sagan-quote">"There is perhaps no better demonstration of the folly of human conceits than this distant image of our tiny world."  -Carl Sagan</p>
            <NasaCard imgUrl={nasaPic.url} />
        </div>
    );
}