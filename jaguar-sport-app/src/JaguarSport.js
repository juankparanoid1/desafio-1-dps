import React, { useEffect } from 'react'
import { HomeScreen } from './components/HomeScreen'
import feather from 'feather-icons';

export const JaguarSport = () => {
    useEffect(() => {
        feather.replace();
    }, []);
    return (
        <div>
            <HomeScreen></HomeScreen>
        </div>
    )
}
