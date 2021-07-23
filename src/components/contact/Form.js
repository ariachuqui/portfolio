import React, { useState } from 'react';
import { sendEmail } from '../../helpers/sendEmail';
import { useForm } from '../../hooks/useForm';

export const Form = () => {
    //Alert error in de form
    const [alert, setAlert] = useState(false)

    //useForm
    const [values, handleInputChange ] = useForm({name:'', email:'', msg:''});
    const {name, email, msg} = values;

    //handle submit
    const handleSubmit = ( e ) => {
        e.preventDefault();

        //Validate Form 
        const fieldEmpty = [ name, email, msg ].some( v => !v.trim() )
        if ( fieldEmpty ) {
            setAlert( 'All field are require.' );
            return;
        }

        if ( !email.includes('@') ) {
            setAlert( 'All field are require.' );
            return;
        }

        //Send Email
        sendEmail(e);
        setAlert( false );

    }

    return (
        <form 
            onSubmit={ handleSubmit }
            className="form-1"
        >
            <p className={`alert-error ${alert && 'alertActive'}`}> {alert} </p>
            

            <div className="input-container relative">
                <input 
                    className="input absolute" 
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={ handleInputChange } 
                    required
                    autoComplete = 'off'
                />

                <label 
                    className="label absolute" 
                    htmlFor="name"
                >
                    Name
                </label>

                <span className="form__line absolute"></span>
            </div>

            <div className="input-container relative">
                <input 
                    className="input absolute" 
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={ handleInputChange } 
                    required
                    autoComplete = 'off'
                />

                <label 
                    className="label absolute" 
                    htmlFor="email"
                >
                    Email
                </label>

                <span className="form__line absolute"></span>
            </div>

            <div className="textarea-container relative">
                <textarea 
                     className="input absolute" 
                     id="msg"
                     name="msg"
                     value={msg}
                     onChange={ handleInputChange } 
                     required
                ></textarea>

                <label 
                    className="label absolute" 
                    htmlFor="msg"
                >
                    Message
                </label>

                <span className="form__line absolute"></span>
            </div>
        
            <button 
                className="btn btn-2"
                type="submit"
            > 
                Send 
            </button>

        </form>
    )
}
