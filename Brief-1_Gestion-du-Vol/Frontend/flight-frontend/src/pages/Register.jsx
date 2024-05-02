import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        nom: '',
        prenom: '',
        telephone: ''
    });
    const [error, setError] = useState('');
    const history = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        if (data.error) {
            setError(data.error);
        } else {
            history('/login');
        }
         
    };

    return (
        <div className="container-fluid bg-registration py-5" style={{ margin: '90px 0' }}>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-7 mb-5 mb-lg-0">
                        <div className="mb-4">
                            <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Register</h6>
                            <h1 className="text-white">Create an Account</h1>
                        </div>
                        {/* Add registration form here */}
                    </div>
                    <div className="col-lg-5">
                        <div className="card border-0">
                            <div className="card-header bg-primary text-center p-4">
                                <h1 className="text-white m-0">Register</h1>
                            </div>
                            <div className="card-body rounded-bottom bg-white p-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input type="email" className="form-control p-4" placeholder="Your email" name="email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control p-4" placeholder="Your password" name="password" value={formData.password} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control p-4" placeholder="Your name" name="nom" value={formData.nom} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control p-4" placeholder="Your surname" name="prenom" value={formData.prenom} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" className="form-control p-4" placeholder="Your phone number" name="telephone" value={formData.telephone} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary btn-block py-3" type="submit">Register</button>
                                    </div>
                                    {error && <div className="alert alert-danger mt-3" role="alert">{error}</div>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
