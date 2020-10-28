import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../Hooks/useForm'

export const RegisterPage = () => {

    const [ formValues, handleimputChange, reset ] = useForm({
        name: '',
        email: '',
        pass: ''
    })
    const { name, email, pass, pass2 } = formValues

    const handelLogin = ( e ) => {
        e.preventDefauld()

        reset()
    }

    return (

        <div className="">
            <h3>Registro</h3>
            <form onSubmit={ handelLogin }>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        name="name"
                        value={ name }
                        onChange={ handleimputChange }
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={ email }
                        onChange={ handleimputChange }
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password" 
                        name="pass"
                        value={ pass }
                        onChange={ handleimputChange }
                    />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confrim password" 
                        name="pass2"
                        value={ pass2 }
                        onChange={ handleimputChange }
                    />
                </div>

                <div className="form-group">
                    <input 
                        type="submit" 
                        className="auth__btn" 
                        value="Create Account" />
                </div>
                <div className="form-group">
                    <Link to="/auth/login" > Already have an account? </Link>
                </div>
            </form>
        </div>
    )
}
