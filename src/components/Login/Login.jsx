import React from 'react';
import './Login.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../Common/Preloader/FormsControls/FormsControls';
import { required } from '../../utils/validators/validator';

const LoginForm = (props) => {
    return (
        <form action="#" onSubmit={props.handleSubmit} >
            <Field className="login__field" placeholder={'Login'} name={'login'} component={Input} validate={[required]} />
            <Field className="login__field" placeholder={'Password'} name={'password'} component={Input} validate={[required]} />
            <Field className="login__field" type={'checkbox'} name={'rememberMe'} component={Input} /> remember me
            <button className="login__btn" >Log in</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div className="login">
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default Login;