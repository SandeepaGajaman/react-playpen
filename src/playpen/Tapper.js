import React, {useState, useEffect} from 'react';

const Tapper = () => {

    const [tap, setTap] = useState(0);
    console.log('TapApp - Tapper!');

    useEffect(() => {
        console.log('TapApp - run the useEffect!')
        console.log('#TapApp - Tapper mounted')
        return () => {
            console.log('#TapApp - Tapper unmounted');
        }
    }, [tap]);

    return (
        <div>
            <p>You tapped {tap} times</p>
            <button onClick = {() => setTap(tap + 1)}>
                Tap
            </button>
        </div>
    );
}

export default Tapper;