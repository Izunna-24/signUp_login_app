import image from "../../../src/assets/signup.png"
import PageTemplate from "../../components/signupPageTemplate";

const Register = () => {
    return (
        <>
            <PageTemplate image={image} headerName={"Welcome"}
                          message={"Enter details to register"} buttonText={"Register"}
                          firstName={"Firstname:"} lastName={"Lastname:"} username={"username:"}
                          lastname={"password:"}/>
        </>
    )
}

export default Register;