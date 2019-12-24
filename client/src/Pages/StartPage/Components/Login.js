import React from 'react'
import {Input, Error, Submit} from '../../../UI components/Form components'
import {Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import {register} from '../../../Store/actions'

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  password: Yup.string().min(6, "Password must have at least 6 characters").required("Password is required"),
})

const Login = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Login</h1>

      <Formik
            initialValues={{ email: '', password: '' }}
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
                        <Field as={Input} type="email" name="email" placeholder="Email" />
                        <ErrorMessage name="email" component={Error} />
                        <Field as={Input} type="password" name="password" placeholder="Password" />
                        <ErrorMessage name="password" component={Error} />
                        <Submit type="submit" disabled={isSubmitting}>
                            Submit
                        </Submit>
                    </Form>
                )}
            </Formik>
            <br />
      <p>Don't have an account? Go to <button 
        style={{border: 0, background: 'none', color: '#a58f7e', fontWeight: '700', fontSize: '16px', cursor: 'pointer'}} 
        onClick={() => dispatch(register())}>Register</button> page</p>
    </div>
  )
}

export default Login
