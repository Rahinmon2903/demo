import React from 'react';
import { Outlet,Link} from 'react-router-dom';

const Help = () => {
    return (
        <div>
            <h1>Help</h1>
            <Link to="support">Go to Support</Link>
            <Outlet/>
            
        </div>
    );
};

export default Help;