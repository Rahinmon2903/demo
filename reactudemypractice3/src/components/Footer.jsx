import React from 'react';

const Footer = () => {
    let date=new Date();
    console.log(date);
    let hours=date.getFullYear();
     console.log(hours);
    
 
    return (
        <>
        <footer>
            <p>Copyright {hours}</p>
        </footer>
            
        </>
    );
};

export default Footer;