import { Formik, Form, Field } from "formik";
import '../stylesheets/LoginForm.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


interface FormValues {
    login: string;
    password: string
}

const LoginForm = () => {

    const [isDataInorrect, setIsDataIncorrect] = useState<boolean>(false);

    const navigate = useNavigate();

    const checkVals = (login: string, password: string) => {
        if (login === "Jane Doe" && password === "adm1n") {
            setIsDataIncorrect(false)
            navigate('/home')

        }
        else {
            setIsDataIncorrect(true)
        }
    }
    const initalVals: FormValues = { login: "", password: "" }
    return (
        <div className="LoginForm">

            <Formik
                initialValues={initalVals}
                onSubmit={(values: FormValues, { resetForm }) => {
                    checkVals(values.login, values.password)
                    resetForm()
                }}
            >

                <Form className="white_form_background login_input" >

                    <div className="inputFlex">
                        <label htmlFor="login">Login</label>
                        <Field className="gray_input" id="login" placeholder='Type your login here...' name='login' ></Field>
                    </div>

                    <div className="inputFlex">
                        <label htmlFor="password">Password</label>
                        <Field className="gray_input" id="password" placeholder='Type your password here...' name='password'></Field>
                    </div>

                    <button className="submit_button" type="submit">Log In</button>

                    {
                        isDataInorrect ?

                            <div className="errorMessage">
                                Your login data was incorrect. For this version of application, use Jane Doe as login and adm1n as password.
                            </div> : <></>

                    }
                </Form>
            </Formik>
        </div>);
}

export default LoginForm;