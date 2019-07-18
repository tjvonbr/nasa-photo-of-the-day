import React from "react";

export default function NasaCard({ imgUrl }) {
    return (
        <div className="nasa-card">
            <img src={imgUrl} style={{ maxWidth: "500px" }} alt="cool thing" />
        </div>
    );
}