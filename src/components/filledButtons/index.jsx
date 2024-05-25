import style from '../../components/filledButtons/index.module.css';

const FilledButton = ({text}) => {
    return(
        <div>
            <button type ='submit' className={style.btn}>{text}</button>
        </div>
    )
}

export default FilledButton;