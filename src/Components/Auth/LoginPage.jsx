import React from 'react'
import { useForm } from '../../Hooks/useForm'

export const LoginPage = () => {

    const [ formValues, handleimputChange, reset ] = useForm({
        email: '',
        pass: ''
    })
    const { email, pass } = formValues

    const handelLogin = ( e ) => {
        e.preventDefauld()
    }

    return (
        <div className="auth__box-content">
            <h1 className="auth__title">
                Login
            </h1>
            <form 
                className="form-group"
                onSubmit={ handelLogin }
            >
                <input 
                    type="email"
                    name="email"
                    className="form-control auth__input"
                    onChange={ handleimputChange }
                    value={ email }
                />
                <input 
                    type="password"
                    name="pass"
                    className="form-control auth__input"
                    onChange={ handleimputChange }
                    value={ pass }
                />
                <button
                    type='submit'
                    className="btn btn-block"
                >
                    Login
                </button>

            </form>
        </div>
    )
}
