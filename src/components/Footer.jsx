import React from 'react'

const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => {
    return (
        <footer>
            <p>Copyright ⓒ {currentYear}</p>
        </footer>
    )
}
export default Footer;