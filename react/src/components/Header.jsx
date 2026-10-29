import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { useSelector } from 'react-redux';

function Header() {
    // const { user } = useContext(AuthContext);
    const user = useSelector(state => state.user);

    return (
        <div>
            <p>
                <Link to='/'>Home</Link>
                {" "}
                <Link to='/practice-5'>Login</Link>
                {" "}
                {" "}
                {" "}
                {user ? user.name : 'Guest'}
            </p>
        </div>
    );
}

export default Header;