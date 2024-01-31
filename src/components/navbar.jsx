import React from 'react';
import { Link } from 'react-router-dom';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 flex justify-between items-center py-2 px-12 w-full">
      <div className="text-white text-3xl font-semibold">
        <Link to='/' >
            <QueryStatsIcon /> YOUR-CHART
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link to='/' className='uppercase text-white'>
          Contact Us
        </Link>
        <Link to='/' className='uppercase text-white'>
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;