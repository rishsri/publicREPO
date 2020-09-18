import React, {useState, useContext} from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    navItem,
    NavLink,
    NavbarText,
    NavItem
} from "reactstrap";

import {Link} from "react-router-dom"
import {UserContext}  from  "../src/context/UserContext"

const Header = () => {
    const context = useContext(UserContext)

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <Navbar color = "success" light expand = "md">
            <NavbarBrand><Link too = "/" className="text-white" >
                LCO gitfire app
                </Link>
                </NavbarBrand>
                <NavbarText className="text-white">{context.user?.email ? context.user.email: ""}</NavbarText>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {
                            context.user ? (
                        <NavItem>
                            <NavLink onClick={() => {context.setUser(null)}} className="text-white">
                            Logout
                            </NavLink>
                        </NavItem>
                            ) : (
                                <>
                            <NavItem>
                        <NavLink tag={Link} to ="/Signup" className="text-white">
                            Sign Up
                            </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink tag={Link} to ="/Signin" className="text-white">
                            Sign in
                            </NavLink>
                        </NavItem>
                        </>
                        )
                        }
                        
                        
                    </Nav>
                </Collapse>

        </Navbar>
    )
}

export default Header;