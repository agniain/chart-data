import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="bg-indigo-50 min-h-screen flex flex-col">
            {children}
        </div>
    );
};

export default Layout;
