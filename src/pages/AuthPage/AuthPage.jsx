import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LogInForm from '../../components/LogInForm/LogInForm';

export default function AuthPage({ setUser, setCredentials }) {

    

    return (
        <main>
            <h1>croquis : krō-kē</h1>
            <h4>already a member ? please login</h4>
            <LogInForm setUser={ setUser } setCredentials={ setCredentials } />
            <h4>create an account</h4>
            <SignUpForm setUser={ setUser } /> 
        </main>
    );
}