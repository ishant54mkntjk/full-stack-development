import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    const [formData, setFormData] = useState({
        email: 'test@test.com',
        password: 'test'
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState(null);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value 
        });
    };

    const validate = () => {
        let isValid = true;
        let newErrors = {};

        if (!formData.email) {
            isValid = false;
            newErrors.email = 'Email cannot be empty';
        }

        if (!formData.password) {
            isValid = false;
            newErrors.password = 'Password cannot be empty';
        }
        
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors({});
        setMessage(null);

        if (validate()) {
            if (formData.email === 'test@test.com' && formData.password === 'test') {
                const loggedInUser = { name: 'John Doe', email: formData.email };
                
                // Dispatch LOGIN action to Redux store
                dispatch({
                    type: 'LOGIN',
                    payload: loggedInUser
                });

                navigate('/dashboard');
            } else {
                setErrors({ message: 'Invalid credentials! (Use test@test.com / test)' });
            }
        }
    };

    return (
        <div style={{
            maxWidth: '440px',
            margin: '50px auto',
            padding: '30px',
            background: '#ffffff',
            borderRadius: '10px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
            <h2 style={{ marginBottom: '8px', color: '#1a202c' }}>Login</h2>
            <p style={{ color: '#718096', fontSize: '0.9rem', marginBottom: '20px' }}>
                Enter your credentials to test login and logout functionality.
            </p>

            {errors.message && (
                <div style={{ padding: '10px', marginBottom: '15px', background: '#fff5f5', color: '#c53030', borderRadius: '6px', fontSize: '0.9rem' }}>
                    {errors.message}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', fontWeight: '500' }}>Email Address</label>
                    <input 
                        name="email" 
                        onChange={handleChange}
                        type="text" 
                        value={formData.email} 
                        placeholder="test@test.com"
                        style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #cbd5e0',
                            borderRadius: '6px',
                            boxSizing: 'border-box',
                            fontSize: '0.95rem'
                        }}
                    />
                    {errors.email && (
                        <span style={{ color: '#e53e3e', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.email}</span>
                    )}
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', fontWeight: '500' }}>Password</label>
                    <input 
                        name="password" 
                        onChange={handleChange}
                        type="password" 
                        value={formData.password} 
                        placeholder="test"
                        style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #cbd5e0',
                            borderRadius: '6px',
                            boxSizing: 'border-box',
                            fontSize: '0.95rem'
                        }}
                    />
                    {errors.password && (
                        <span style={{ color: '#e53e3e', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.password}</span>
                    )}
                </div>

                <button 
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '11px',
                        background: '#007bff',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                    }}
                >
                    Log In
                </button>
            </form>

            <div style={{ marginTop: '20px', padding: '10px', background: '#edf2f7', borderRadius: '6px', fontSize: '0.85rem', color: '#4a5568' }}>
                💡 <strong>Demo Credentials:</strong><br/>
                Email: <code>test@test.com</code><br/>
                Password: <code>test</code>
            </div>
        </div>
    );
}

export default Login;
