import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import style from './index.module.css';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {Icon} from '@iconify/react';
import loadingLoop from '@iconify/icons-line-md/loading-loop';
import FilledButton from "../filledButtons";


const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('*'),
    lastName: Yup.string()
        .required('*'),
    username: Yup.string()
        .required('*'),
    password: Yup.string()
        .required('*')
});

const PageTemplate = ({ image, headerName, message, buttonText, noAccountMessage, link, textLinks }) => {
    const [isLoading, setIsLoading] = useState(false);

    const submitButton = async (values, { resetForm }) => {
        setIsLoading(true);
        try {
            const payload = {
                firstName: values.firstName,
                lastName: values.lastName,
                username: values.username,
                password: values.password,
            }
            const response = await axios.post( "http://localhost:7676/api/v1/user/register", payload);

            if (response.data.successful) {
                toast.success(`Welcome ${values.firstName}, your registration is successful!`, {
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
                toast.error('Registration failed. Please try again', {
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
            console.error('Error during registration:', error);
            toast.error('Registration failed. Please try again', {
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
                    initialValues={{ firstName: '', lastName: '', username: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={submitButton}
                >
                    {() => (
                        <Form className={style.formStyle}>
                            <div>
                                <Field
                                    type="text"
                                    name="firstName"
                                    placeholder="firstname"
                                    className={style.inputField}
                                />
                                <ErrorMessage name="firstName" component="div" className={style.error}/>
                            </div>
                            <br></br>
                            <div>
                                <Field
                                    type="text"
                                    name="lastName"
                                    placeholder="lastname"
                                    className={style.inputField}
                                />
                                <ErrorMessage name="lastName" component="div" className={style.error}/>
                            </div>
                            <br></br>
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
                            <div className={style.input}>
                                <p>{noAccountMessage}</p>
                                <a href={link}>{textLinks}</a>
                            </div>
                            <FilledButton text={buttonText}>
                                {isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <Icon width={24} height={24} icon={loadingLoop}/>
                                    </div>
                                ) : (
                                    buttonText
                                )}
                            </FilledButton>
                        </Form>
                    )}
                </Formik>
            </div>
            <ToastContainer />
        </div>
    );
};

export default PageTemplate;