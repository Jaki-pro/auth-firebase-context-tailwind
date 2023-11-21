import React, { useContext } from 'react';
import { AuthContext } from '../providers/Authproviders';

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            Home page {user}
        </div>
    );
};

export default Home;