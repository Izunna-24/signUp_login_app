import PageTemplate from "../../components/pageTemplate";
import image from "../../assets/signup.png";

const Signup = () => {
    return(
        <>
            <PageTemplate image={image} headerName={"Welcome!"}
                          underHeader={"sign up by entering the information below"}
            holder1={"firstname"} holder2={"lastname"}
            holder3={"username"} holder4={"password"}
            buttonText={"Sign up"}/>


        </>
    )
}

export default Signup;