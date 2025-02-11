import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = () => {
    const links = (
        <div className="flex justify-center items-center gap-5 space-x-0 sm:space-x-1 md:space-x-1">
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
        </div>
    )

    return links
};

export default NavLink;