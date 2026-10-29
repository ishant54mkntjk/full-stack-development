/**
 * 1. It gets executed, atleast 1, time as soon as the component is 
 *      rendered for the first time.
 * 2. If the dependency array is empty, that means the useEffect will
 *      get executed exactly 1 time.
 * 3. It gets executed everytime value of the dependency gets changed.
 */
import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setUser({ userId: userId, name: `user_${userId}`});
        }, 2000);
    }, [user]);
    
    if (!user) return <p>Loading...</p>

    return (
        <div>
            <p>User: {user.userId} | {user.name}</p>
        </div>
    );
}

export default UserProfile;