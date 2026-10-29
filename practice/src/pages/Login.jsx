/**
 * Process to build any form
 *      1. [X] UI Elements (HTML + CSS)
 *      2. [X] Setup states
 *      3. [X] Form Validation
 *      4. [X] Handle API call
 *      5. [X] Message handling: failure/success messages.
 */

import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useDispatch } from 'react-redux';

function Login() {
    // const { login } = useContext(AuthContext);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState(null);

    const handleChange = (event) => {
        // event.target.name; event.target.value
        setFormData({
            ...formData,
            // [ ] square brackets tell javascript to evaluate value and not use it as is. 
            [event.target.name]: event.target.value 
        });
    };

    const validate = () => {
        let isValid = true;
        let newErrors = {};

        if (formData.email === '') {
            isValid = false;
            newErrors.email = 'Email cannot be empty';
        }

        if (formData.password === '') {
            isValid = false;
            newErrors.password = 'Password cannot be empty';
        }
        
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (event) => {
        setErrors({});
        setMessage(null);
        event.preventDefault(); // Practice Problem, identify the need for this.

        if (validate()) {
            // We can proceed with API call.
            // For now, we're hardcoding validation business logic
            if (formData.email === 'test@test.com' && formData.password === 'test') {
                // We need to perform redirection
                
                // This will come from API call.
                const user = { name: 'John', email: 'test@test.com' };
                // login(user);
                dispatch({
                    type: 'LOGIN',
                    payload: user
                });
            } else {
                setErrors({ message: 'Invalid Credentials'});
            }
        }
    };

    return (
        <div>
            <h3>Login to continue</h3>

            {message && (
                <div style={{ color: 'green '}}>{message}</div>
            )}

            {errors.message && (
                <div style={{ color: 'red'}}>{errors.message}</div>
            )}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input name="email" onChange={handleChange}
                        type="text" value={formData.email} 
                        placeholder="Enter your email" 
                    />
                    {errors.email && (
                        <label style={{ color: 'red' }}>{errors.email}</label>
                    )}
                    
                </div>

                <div>
                    <label>Password</label>
                    <input name="password" onChange={handleChange}
                        type="password" value={formData.password} 
                        placeholder="Enter your password" 
                    />
                    {errors.password && (
                        <label style={{ color: 'red' }}>{errors.password}</label>
                    )}
                </div>

                <div>
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;