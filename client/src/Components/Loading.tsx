import react from 'react';

import ClockLoader from 'react-spinners/ClockLoader';

function Loading() {
    return (
        <div id="loading">
            <ClockLoader color="#c4302b" size={75} />
        </div>
    )
}

export default Loading;