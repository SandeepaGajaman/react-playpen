import React, {useState} from 'react';
import Tapper from './Tapper';

const LifeCycleWithHooks = () => {

    const [showTapper, setShowTapper] = useState(false);
    console.log('TapApp - LifeCycleWithHooks!')

    return (
        <div>
            <h1>Tap App</h1>
            {showTapper && <Tapper/>}
            <button onClick = {() => setShowTapper(!showTapper)}>
                {showTapper ? 'Stop Tapping' : 'Start Tapping'}
            </button>
        </div>
    );
}

export default LifeCycleWithHooks;