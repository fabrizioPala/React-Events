// App.jsx
import React from 'react';
import { Welcome } from './Welcome';
import { AllarmClock } from './AlarmClock'; // Corrected import path

export function App() {
    function handleButtonClick() {
        const now = new Date();
        alert(`The current time is ${now.toLocaleTimeString()}`);
    }

    return (
        <div>
            <Welcome name="John" age={17} />
            <AllarmClock onButtonClick={handleButtonClick} />
        </div>
    );
}
