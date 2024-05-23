import FilledButton from "../../components/filledButtons";
import PageTemplate from "../../components/pageTemplate";
import image from "../../assets/signup.png";

const Signup = () => {
    return(
        <>
        <PageTemplate image={image} headerName={"Welcome!"}
          underHeader={"sign up by entering the information below"}/>
        <FilledButton text={"Signup" }/>
        </>
    )
}

export default Signup;