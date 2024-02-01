import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen flex flex-col overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    className="w-full h-full object-cover object-bottom filter blur-sm opacity-50"
                    src="/images/chart-2.jpg"
                    alt="Background"
                />
            </div>
            <div className="relative z-10 flex-1">
                {children}
            </div>
        </div>
    );
};

export default Layout;
