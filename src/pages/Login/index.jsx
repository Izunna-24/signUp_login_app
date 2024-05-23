import FilledButton from "../../components/filledButtons";
import PageTemplate from "../../components/pageTemplate";
import image from "../../assets/login.png"

const Login = () => {
    return(
        <>
        <PageTemplate image={image} headerName={"Welcome back!"}
        underHeader={"Login to your DashBoard"}
        buttonText={"Login"}/>
        </>
    )
}
export default Login;