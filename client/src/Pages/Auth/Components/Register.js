import React from 'react'
import {Input, Error, Submit} from '../../../UI components/Form components'
import {Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import {login, error, noterror} from '../../../Store/actions'
import axios from 'axios'
import {useSelector} from 'react-redux'

const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Username must have at least 3 characters").required("Username is required"),
    email: Yup.string().email("Enter a valid email").required("Email is required"),
    password: Yup.string().min(6, "Password must have at least 6 characters").required("Password is required"),
    passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const Register = () => {
    const err = useSelector(state => state.errorMessage)
    const dispatch = useDispatch()
    
    return (
        <div>

            <h1>Register</h1>

            <Formik
            initialValues={{ name: '', email: '', password: '', passwordConfirmation: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                dispatch(noterror(''))
                setTimeout(() => {
                    
                    axios.post('/register', values).then(res => {
                        console.log(res)
                        resetForm()
                        dispatch(login())
                    }).catch(err => {
                        dispatch(error(err.response.data.msg))
                        console.log(err.response.data.msg)
                    })
                    setSubmitting(false)
                }, 400);
            }}
            > 
                {({ isSubmitting }) => (
                    <Form>
                        {err.state && <Error special>{err.message}</Error>}
                    
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
        onClick={() => {dispatch(login()); dispatch(noterror(''))}}>Login</button> page</p>
        </div> 
    )
}

export default Register
