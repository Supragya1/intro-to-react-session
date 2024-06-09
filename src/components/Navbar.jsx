    import { Link, useMatch, useResolvedPath } from "react-router-dom";
    import PropTypes from "prop-types"; 
    import { useState } from "react";
    import { useEffect } from "react";
    import logo from '../assets/artwork.png';
    export default function Navbar() {
        const [menuOpen,setMenuOpen] = useState(false)
        const [navVisible, setNavVisible] = useState(false)
        useEffect(() => {
            const handleResize = () => {
                const navUl = document.querySelector('nav ul');
                if (navUl) {
                if (window.innerWidth >= 768) {
                    navUl.classList.add('expanded');
                } else {
                    navUl.classList.remove('expanded');
                }
                }
            };
        
            window.addEventListener('resize', handleResize);
            handleResize(); 
        
            return () => {
                window.removeEventListener('resize', handleResize);
            };
            }, []);
        const toggleMenu = () => {
            setMenuOpen(!menuOpen);
            setNavVisible(!navVisible);
            console.log(`Menu open state: ${!menuOpen}`);
        };
        return (
            <nav className={`nav ${navVisible ? "visible" : ""}`}>
                <Link to="/" className="logo">
                    <img src={logo} alt="Logo" />
                </Link>
                <div className={`menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <CustomLink to="/Home">Home</CustomLink>
                    <CustomLink to="/About">About</CustomLink>
                    <CustomLink to="/Gallery">Gallery</CustomLink>
                </ul>
            </nav>
            
        );
    }

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to);
        const isActive = useMatch({ path: resolvedPath.pathname, end: true });
        return (
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>{children}</Link>
            </li>
        );
    }

    CustomLink.propTypes = {
        to: PropTypes.string.isRequired, 
        children: PropTypes.node.isRequired, 
    };
