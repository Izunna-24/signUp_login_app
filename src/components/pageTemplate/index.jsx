import style from './index.module.css';
import FilledButton from "../filledButtons";
import PlaceHolder from "../placeHolder";
const pageTemplate = ({image, headerName, underHeader, buttonText,
                          holder1, holder2, holder3, holder4}) =>{
   const submitButton = (e) =>{
       e.preventDefault();
       const formData  = new formData(e.target)
       const data = {
           holder1: formData.get("holder1"),
           holder2: formData.get("holder2"),
           holder3: formData.get("holder3"),
           holder4: formData.get("holder4"),
       };
       console.log(data)
   }
   return(
        <>
            <div className={style.container}>
            <img src={image} alt="image"/>
                <div className={style.signup}>
                    <h1>{headerName}</h1>
                    <p>{underHeader}</p>
                    <form
                        onSubmit={submitButton} className={style.formStyle}>
                        {holder1 && <PlaceHolder name="holder1" text={holder1}/>}
                        {holder2 && <PlaceHolder name="holder2" text={holder2}/>}
                        {holder3 && <PlaceHolder name="holder3" text={holder3}/>}
                        {holder4 && <PlaceHolder name="holder4" text={holder4}/>}
                        <FilledButton text={buttonText}/>
                    </form>
                </div>
            </div>
        </>
    )
}
export default pageTemplate;