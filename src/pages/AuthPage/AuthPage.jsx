import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LogInForm from '../../components/LogInForm/LogInForm';

export default function AuthPage({ setUser, setCredentials }) {

    

    return (
        <main>
            <h1>croquis : krō-kē</h1>
            <p>already a member ? please login</p>
            <LogInForm setUser={ setUser } setCredentials={ setCredentials } />
            <p>create an account</p>
            <SignUpForm setUser={ setUser } /> 
        </main>
    );
}