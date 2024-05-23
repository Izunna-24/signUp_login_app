import style from './index.module.css';
import FilledButton from "../filledButtons";
const pageTemplate = ({image, headerName, underHeader, buttonText}) =>{
    return(
        <>
            <div className={style.container}>
            <img src={image} alt="image"/>
                <div className={style.signUp}>
                    <h1>{headerName}</h1>
                    <p>{underHeader}</p>
                    <FilledButton text={buttonText}/>
                </div>
            </div>
            </>
    )
}
export default pageTemplate;