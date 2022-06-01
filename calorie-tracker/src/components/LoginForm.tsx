import { Formik, Form, Field } from "formik"; 
import '../stylesheets/LoginForm.scss';
import {useState} from 'react';

interface FormValues {
    login: string;
    password: string
}

const LoginForm = () => {
    const [isLoginDataOk, setIsLoginDataOk] = useState<string>('');
    const checkVals = (login: string, password: string) => {
        if(login==="Jane Doe" && password==="adm1n"){

        }
    }
    const initalVals: FormValues = {login:"", password:""}
    return ( 
    <div className="LoginForm">

        <Formik
            initialValues={initalVals}
            onSubmit = {(values: FormValues)=>{
                console.log(values);
            }}
        >
            
            <Form className="white_form_background login_input" >

            <div className="inputFlex">
                <label htmlFor="login">Login</label>
                <Field className="gray_input input" name='login'></Field>
            </div>

                <div className="inputFlex">
                    <label htmlFor="password">Password</label>
                    <Field className="gray_input input" name='password'></Field>
                </div>

                <button className="submit_button" type="submit">Log In</button>
            </Form>
        </Formik>
    </div> );
}
 
export default LoginForm;