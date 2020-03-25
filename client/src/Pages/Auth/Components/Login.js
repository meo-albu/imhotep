import React from 'react'
import {Input, Error, Submit} from '../../../UI components/Form components'
import {Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import {register, error, noterror, loggedin} from '../../../Store/actions'
import {useSelector} from 'react-redux'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  password: Yup.string().min(6, "Password must have at least 6 characters").required("Password is required"),
})

const Login = () => {
  const err = useSelector(state => state.errorMessage)
  const dispatch = useDispatch()
  const history = useHistory()
  return (
    <div>
      <h1>Login</h1>

      <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(noterror(''))
                setTimeout(() => {
                    axios.post('/login', values).then(res => {
                      localStorage.setItem('token', res.data.token)
                      dispatch(loggedin(res.data.user))
                      history.push('/game')
                    }).catch(err => {
                      dispatch(error(err.response.data.msg))
                    })
                    
                    setSubmitting(false)
                  }, 400);
                }}
                >
                {({ isSubmitting }) => (
                    <Form>
                      {err.state && <Error special>{err.message}</Error>}

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
        onClick={() => {dispatch(register()); dispatch(noterror(''))}}>Register</button> page</p>
    </div>
  )
}

export default Login
