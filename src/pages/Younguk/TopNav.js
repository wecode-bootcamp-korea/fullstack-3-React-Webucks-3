import React from 'react';
import { Link } from 'react-router-dom';

function TopNav() {
    return (
        <nav>
            <Link to="../" className="logo">Webucks</Link>
            <ul>
                <li><Link to="../List" className="topbanner-list">MENU</Link></li>
                <li><a href="" className="topbanner-list">COFFEE</a></li>
                <li><a href="" className="topbanner-list">STORE</a></li>
                <li><Link to="../Detail" className="topbanner-list">WHAT'S NEW</Link></li>
            </ul>
        </nav>
    );
}



export default TopNav