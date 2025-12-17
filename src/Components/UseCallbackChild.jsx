import React from 'react';

const UseCallbackChild = React.memo(({handleClick}) => {
    console.log("This component is rendering");
    
    return (
        <div>
            <button className='border px-3 py-1' onClick={handleClick}>click</button>
        </div>
    );
});

export default UseCallbackChild;