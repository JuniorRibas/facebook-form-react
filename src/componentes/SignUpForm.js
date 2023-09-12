import React, { useState } from 'react';
import '../styles/SignUpForm.css';

function SignUpForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailOrPhone: '',
        password: '',
        birthday: '',
        gender: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // Aqui você adicionaria a lógica para enviar os dados, por exemplo, para um backend
    };

    return (
        <div className="sign-up-form">
            <h1>Criar conta</h1>
            <form onSubmit={handleSubmit}>
                <div className="name-fields">
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="Nome" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Sobrenome" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </div>
                <input 
                    type="text" 
                    name="emailOrPhone" 
                    placeholder="Número de celular ou email" 
                    value={formData.emailOrPhone}
                    onChange={handleInputChange}
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Nova senha" 
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <label>Data de nascimento</label>
                <input 
                    type="date" 
                    name="birthday" 
                    value={formData.birthday}
                    onChange={handleInputChange}
                />
                <label>Gênero</label>
                <select name="gender" value={formData.gender} onChange={handleInputChange}>
                    <option value="female">Feminino</option>
                    <option value="male">Masculino</option>
                    <option value="other">Outro</option>
                </select>
                <button type="submit">Inscreva-se</button>
            </form>
        </div>
    );
}

export default SignUpForm;