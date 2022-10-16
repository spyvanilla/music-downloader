import react from 'react';

import ClockLoader from 'react-spinners/ClockLoader';

function Loading() {
    return (
        <div id="loading">
            <ClockLoader color="#8233C5" size={75} />
        </div>
    )
}

export default Loading;