import React from "react"
import { Link } from "react-router-dom"
import NashvilleMain from "../governments/states/tennessee/cities/Nashville/NashvilleMain";

const MapPlaceholder = () => {
    const rootContainer = document.getElementById('root')
    return (
        <Link className="nav-link" to="/nashville">
            <button>To Nashville</button>
        </Link>

    );
};

export default MapPlaceholder;