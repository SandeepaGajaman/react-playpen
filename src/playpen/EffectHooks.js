import React, {useState, useEffect} from 'react';

const EffectHook = () => {
    
    const [count, setCount] = useState(0);

    //Similar to componentDidMount and componentDidUpdate
    //Use to pass data to backend
    useEffect ( () => {
        // document.title = `${count} Taps`;
        console.log(count + 2);
    }, [count]);

    return (
        <div>
            <p>{count} Taps</p>
            <button onClick = { () => setCount( count + 1) }>
                Tap
            </button>
        </div>
    );
}

export default EffectHook;