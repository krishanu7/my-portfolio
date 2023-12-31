import React from 'react'
import NavLink from "./NavLink"

const NavBarMenu = ({ links }) => {
    return (
        <ul className="flex flex-col py-3 items-center">
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    )
}

export default NavBarMenu
