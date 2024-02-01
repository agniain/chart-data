import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="p-4 mt-8 w-full">
        <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-black">
            About Us
        </Link>

        <p className="text-black"><LocationOnIcon /> Bandung, Indonesia</p>
        <p className="text-black"><CopyrightIcon /> Copyright 2024</p>
        
        </div>
    </footer>
  )
}

export default Footer;