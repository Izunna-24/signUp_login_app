import PageTemplate from "../../components/pageTemplate";
import image from "../../assets/login.png";
import{Link} from 'react-router-dom';

const Login = () => {
    return(
        <>
            <PageTemplate image={image} headerName={"Welcome back!"}
                          underHeader={"Login to your DashBoard"} buttonText={"Login"}
            username={"username"} password={"password"}
            noAccountMessage={"register to create account"}
            buttonTextOne= {<Link to={"/signup"}> Signup  </Link>}/>

        </>
    )
}
export default Login;