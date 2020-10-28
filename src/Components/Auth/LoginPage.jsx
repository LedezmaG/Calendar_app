import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'

export const LoginPage = () => {

    const [ formValues, handleimputChange, reset ] = useForm({
        email: '',
        pass: ''
    })
    const { email, pass } = formValues

    const handelLogin = ( e ) => {
        e.preventDefault()
        reset()
    }

    return (
        <>
            <h3>Ingreso</h3>
            <form onSubmit={ handelLogin } >
                <div className="form-group">
                    <input 
                        type="text"
                        className="form-control auth__input"
                        placeholder="Email"
                        name="email"
                        value={ email }
                        onChange={ handleimputChange }
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control auth__input"
                        placeholder="Password"
                        name="pass"
                        value={ pass }
                        onChange={ handleimputChange }
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="submit"
                        className="auth__btn"
                        value="Login" 
                    />
                </div>
                <div className="form-group">
                    <Link to="/auth/register" > Create account </Link>
                </div>
            </form>
        </>
    )
}