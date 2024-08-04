import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [randomData, setRandomData] = useState({ number: '', text: '' });

    const fetchRandomData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/random');
            setRandomData(response.data);
        } catch (error) {
            console.error("Error fetching random data:", error);
        }
    };

    const styles = {
        app: {
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#282c34',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
        },
        header: {
            fontSize: '2em',
            margin: '20px 0',
        },
        button: {
            padding: '10px 20px',
            fontSize: '1em',
            color: '#282c34',
            backgroundColor: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '20px 0',
        },
        dataContainer: {
            fontSize: '1.5em',
            marginTop: '20px',
        },
        dataItem: {
            margin: '10px 0',
        }
    };

    return (
        <div style={styles.app}>
            <header style={styles.header}>
                <h1>Random Text and Number Generator</h1>
            </header>
            <button style={styles.button} onClick={fetchRandomData}>Generate Random Data</button>
            <div style={styles.dataContainer}>
                <p style={styles.dataItem}>Random Number: {randomData.number}</p>
                <p style={styles.dataItem}>Random Text: {randomData.text}</p>
            </div>
        </div>
    );
}

export default App;
