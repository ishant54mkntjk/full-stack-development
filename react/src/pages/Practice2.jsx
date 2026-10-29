import { useState } from 'react';
import UserProfile from './UserProfile';

function Practice2() {
    const [activeUserId, setActiveUserId] = useState(1);
    const [isProfileVisible, setIsProfileVisible] = useState(true);

    return (
        <div>
            <h2>API Fetching Component</h2>
            <button onClick={() => setActiveUserId(1)} >View UserId-1</button>
            <button onClick={() => setActiveUserId(2)} >View UserId-2</button>

            <button onClick={() => setIsProfileVisible(!isProfileVisible)}>
                {isProfileVisible ? 'Hide Profile' : 'View Profile'}
            </button>

            <hr/>

            { isProfileVisible && <UserProfile userId={activeUserId} />}
        </div>
    );
}

export default Practice2;