import React from "react";

export default function NasaCard({ imgUrl }) {
    return (
        <div className="nasa-card">
            <img src={imgUrl} style={{ maxWidth: "1024px" }} alt="cool thing" />
        </div>
    );
}