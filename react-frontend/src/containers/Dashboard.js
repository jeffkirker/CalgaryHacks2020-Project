import React from 'react';
import AppBar from '../components/AppBar/AppBar';
import CardCarousel from '../components/CardCarousel/CardCarousel';

export default function Dashboard() {
    return (
        <>
        <div>
            <AppBar />
        </div>
        <div>
            <CardCarousel />
        </div>
        </>
    )
}
