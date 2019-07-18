import React from "react";

export default function NasaCard({ imgUrl, imgTitle, imgExplanation }) {
    return (
        <div className="nasa-card">
            <img src={imgUrl} style={{ maxWidth: "1024px" }} alt="NASA Picture of the Day" />
            <h6>{imgTitle}</h6>
            <p>{imgExplanation}</p>
        </div>
    );
}