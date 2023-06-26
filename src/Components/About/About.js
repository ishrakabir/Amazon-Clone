import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';

const About = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1>About Us page</h1>
            <h1>{user?.email}</h1>
        </div>
    );
};

export default About;