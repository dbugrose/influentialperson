"use client";

import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";
import React from 'react'

function NavLinks() {
    return (
        <Navbar fluid rounded className="bg-[#E3D7E7]!">
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="/" className="text-[#000000]!">Home</NavbarLink>
                <NavbarLink href="/pages/accomplishments" className="text-[#000000]!">Accomplishments</NavbarLink>
                <NavbarLink href="/pages/interests" className="text-[#000000]!">Interests</NavbarLink>
                <NavbarLink href="/pages/selectedpoems" className="text-[#000000]!">Selected Poems</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}

export default NavLinks