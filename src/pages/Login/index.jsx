
import PageTemplate from "../../components/pageTemplate";
import image from "../../assets/login.png"

const Login = () => {
    return(
        <>
            <PageTemplate image={image} headerName={"Welcome back!"}
                          underHeader={"Login to your DashBoard"} buttonText={"Login"}
            holder1={"username"} holder2={"password"}/>


        </>
    )
}
export default Login;