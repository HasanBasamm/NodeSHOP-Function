import React from 'react';
import { Footer } from '../Components/Footer/footer';
import { Header } from '../Components/Header/header';
import { Main } from '../Components/Main/main';

export function Home() {
    return (
        <div className="">
            <Header />
            <Main />
            <Footer />
        </div>

    );
}