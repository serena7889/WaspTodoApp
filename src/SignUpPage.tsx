import { Link } from 'react-router-dom'
import { SignupForm } from 'wasp/client/auth'

export const SignUpPage = () => {
    return (
        <div style={{ maxWidth: '400px', margin: '0 auto'}}>
            <SignupForm />
            <br />
            <span>
                Don't have an account? (<Link to="/sign_up">Sign Up</Link>) here.
            </span>
        </div>
    )
}