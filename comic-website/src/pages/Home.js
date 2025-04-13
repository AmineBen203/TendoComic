import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to the Comic Website</h1>
                <p>Your one-stop destination for all things comics!</p>
            </main>
            <Footer />
        </div>
    );
};

export default Home;