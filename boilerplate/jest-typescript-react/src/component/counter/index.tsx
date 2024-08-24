//counter.tsx
import * as React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div data-testid='count-announcement'> you have been clicked {count} times</div>
            <button
                data-testid='increase-button'
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                {' '}
                increase count
            </button>
        </div>
    );
};
export default Counter;
