import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handlerSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        }
        catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handlerSubmit}>
                    <FormInput name='email' type='email' label='Email' handleChange={this.handleChange} value={this.state.email} required />
                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;