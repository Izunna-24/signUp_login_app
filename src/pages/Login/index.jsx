import image from "../../assets/login.png";
import{Link} from 'react-router-dom';
import PageTemplate from "../../components/loginPageTemplate";

const Login = () => {
    return (
        <PageTemplate
            image={image}
            headerName={"Welcome back!"}
            underHeader={"Login to your DashBoard"}
            buttonText={"Login"}
            username={"username"}
            password={"password"}
            noAccountMessage={<span>click <Link to={"/register"}>to register</Link></span>}
        />
    );
}

export default Login;