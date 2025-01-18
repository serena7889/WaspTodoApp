import { Link } from 'react-router-dom'
import { LoginForm } from 'wasp/client/auth'

export const LogInPage = () => {
    return (
        <div style={{ maxWidth: '400px', margin: '0 auto'}}>
            <LoginForm />
            <br />
            <span>
                Don't have an account? <Link to="/sign_up">Sign Up</Link> here.
            </span>
        </div>
    )
}