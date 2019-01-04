import React from 'react';
import { Link } from "react-router-dom"

const SideBar = () => {
    return (
        <div className="col-4" style={{ borderRight: "1px solid red" }}>
            <h1>side pannel</h1>
            <h2>This is side bar</h2>
            <button className="btn mb-2"><Link to="/">Button 1</Link></button><br />
            <button className="btn"><Link to="/route2">Button 2</Link></button>
        </div>

    );
};

export default SideBar;