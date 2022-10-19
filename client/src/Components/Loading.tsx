import react from 'react';

import SyncLoader from 'react-spinners/SyncLoader';

function Loading() {
    return (
        <div id="loading">
            <SyncLoader color="#c4302b" size={25} />
        </div>
    )
}

export default Loading;