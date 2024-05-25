import image from "../../../src/assets/signup.png"
import PageTemplate from "../../components/pageTemplate";

const SignUp = () => {
    return (
        <>
            <PageTemplate image={image} headerName={"Welcome"}
                          message={"Enter details to register"} buttonText={"Sign Up"}
                          firstName={"Firstname:"} lastName={"Lastname:"} username={"username:"}
                          lastname={"password:"}/>
        </>
    )
}

export default SignUp;