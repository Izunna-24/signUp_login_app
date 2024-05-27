import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import style from '../../components/loginPageTemplate/index.module.css';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {Icon} from '@iconify/react';
import loadingLoop from '@iconify/icons-line-md/loading-loop';
import FilledButton from "../filledButtons";


const validationSchema = Yup.object().shape({
    username: Yup.string().required('*'),
    password: Yup.string().required('*'),
});

const PageTemplate = ({ image, headerName, message, buttonText, noAccountMessage, link, buttonTextOne }) => {
    const [isLoading, setIsLoading] = useState(false);

    const submitButton = async (values, {resetForm}) => {
        setIsLoading(true);
        try {
            const payload = {
                username: values.username,
                password: values.password,
            }
            const response = await axios.post( "http://localhost:7676/api/v1/user/loggin", payload);

            if (response.data.successful) {
                toast.success(` ${values.username}, you have logged in successfully!`, {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                resetForm();
            } else {
                toast.error('Login failed', {
                    position: 'top-left',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error("could not find your todoByTomCatAccount", {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={style.container}>
            <img src={image} alt="" style={{width:'40%', height:'30%'}} />
            <div className={style.heroText}>
                <h1 style={{marginBottom: "5px", marginLeft: '100px'}}>{headerName}</h1>
                <p style={{marginBottom: '10px', marginLeft: '90px', fontSize: "smaller"}}>{message}</p>
                <Formik
                    initialValues={{username: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={submitButton}
                >
                    {() => (
                        <Form className={style.formStyle}>
                            <div>
                                <Field
                                    type="text"
                                    name="username"
                                    placeholder="username"
                                    className={style.inputField}
                                />
                                <ErrorMessage name="username" component="div" className={style.error}/>
                            </div>
                            <br></br>
                            <div>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className={style.inputField}
                                />
                                <ErrorMessage name="password" component="div" className={style.error}/>
                            </div>
                            <br></br>
                            <div className="remember-contaner">
                                <h6 className="remember">Remember Me</h6>
                                <h6 className="forget">Forget Password</h6>
                            </div>

                            <br></br>
                        <FilledButton text={buttonText}>
                                {isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <Icon width={24} height={24} icon={loadingLoop}/>
                                    </div>
                                ) : (
                                    buttonText
                                )}
                            </FilledButton>
                            <div className={style.input}>
                                <h2>{noAccountMessage}</h2>
                            </div>
                            <div className={style.inputOne}>
                                <a href={link}>{buttonTextOne}</a>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default PageTemplate;
