import React from 'react'
import {Input, Error, Submit} from '../../../UI components/Form components'
import {Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import {login} from '../../../Store/actions'

const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Username must have at least 3 characters").required("Username is required"),
    email: Yup.string().email("Enter a valid email").required("Email is required"),
    password: Yup.string().min(6, "Password must have at least 6 characters").required("Password is required"),
    passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const Register = () => {
    const dispatch = useDispatch()
    
    return (
        <div>

            <h1>Register</h1>

            <Formik
            initialValues={{ name: '', email: '', password: '', passwordConfirmation: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2))
                    setSubmitting(false)
                    resetForm()
                }, 400);
            }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field as={Input} type="text" name="name" placeholder="Username" />
                        <ErrorMessage name="name" component={Error} />
                        <Field as={Input} type="email" name="email" placeholder="Email" />
                        <ErrorMessage name="email" component={Error} />
                        <Field as={Input} type="password" name="password" placeholder="Password" />
                        <ErrorMessage name="password" component={Error} />
                        <Field as={Input} type="password" name="passwordConfirmation" placeholder="Confirm password" />
                        <ErrorMessage name="passwordConfirmation" component={Error} />
                        <Submit type="submit" disabled={isSubmitting}>
                            Submit
                        </Submit>
                    </Form>
                )}
            </Formik>
            <br />
            <p>Already have an account? Go to <button 
        style={{border: 0, background: 'none', color: '#a58f7e', fontWeight: '700', fontSize: '16px', cursor: 'pointer'}} 
        onClick={() => dispatch(login())}>Login</button> page</p>
        </div> 
    )
}

export default Register
