import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = () => {
    const links = (
        <>
            <li>
                <Link>Home</Link>
            </li>
            <li>
                <Link>About</Link>
            </li>
            <li>
                <Link>Blog</Link>
            </li>
            <li>
                <Link>Contact</Link>
            </li>
            <li>
                <Link>Support </Link>
            </li>
            <li>
                <Link>Pay Now </Link>
            </li>
            <li>
                <Link>Print Ticket </Link>
            </li>
        </>
    )

    return links
};

export default NavLink;