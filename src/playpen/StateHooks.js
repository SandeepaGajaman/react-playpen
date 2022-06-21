import React, {useState} from 'react';

// function CheckHooks() {

//     const [count, setCount] = useState(0);

//     return(
//         <div>
//             <p>You clicked me {count} times!</p>
//             <button onClick = { () => setCount(count + 1)}>
//                 Click Me
//             </button>
//         </div>
//     );
// }

const CheckHooks = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked me {count} times!</p>
            <button onClick = { () => setCount( count + 1 ) }>
                Click Me
            </button>
        </div>
    );
}

export default CheckHooks;