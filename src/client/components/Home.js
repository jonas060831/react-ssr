import React from 'react';

const Home = () => {
    return (
        <div>
            I'm the home component <br />
            <button onClick={ () => console.log('Hi There')} >Press me!</button>
        </div>);
};

export default Home;