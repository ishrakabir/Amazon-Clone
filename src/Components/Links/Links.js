import React from 'react';

const Links = ({ route }) => {
    return (

        <li className='md:mr-12 mt-3'><a href={route.path}>{route.name}</a></li>

    );
};

export default Links;