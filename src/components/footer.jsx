import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 p-4 mt-8 w-full">
        <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white">
            About Us
        </Link>

        <p className="text-white"><LocationOnIcon /> Bandung, Indonesia</p>
        <p className="text-white"><CopyrightIcon /> Copyright 2024</p>
        
        </div>
    </footer>
  )
}

export default Footer;