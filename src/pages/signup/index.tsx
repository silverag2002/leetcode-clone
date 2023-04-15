import React ,{useState} from 'react';
import { useForm ,SubmitHandler} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from 'yup';

import styles from '../../styles/SignUp.module.css'

interface SignUpForm{
    email: string;
    password:string;
    // confirmpassowrd:string;
    username:string;
}

const schema = yup.object({
    email: yup.string().email().required("Email is required").trim(),
    password: yup
    .string()
    .required('Please enter your password.')
    .min(8, 'Your password is too short.'),
//   confirmpassword: yup
//     .string()
//     .required('Please retype your password.')
//     .oneOf([yup.ref('password')], 'Passwords does not match'),
    username: yup.string().required("Username is required")
   
  });


export default function SignUp(){

 const { register, handleSubmit, watch, formState: { errors } } = useForm<SignUpForm>( {resolver: yupResolver(schema)});




 const onSubmit: SubmitHandler<SignUpForm>=data => console.log(data);


    return (
        <>
        <section className={styles.bodystyle}>
        {/* <div className={styles.centertitle}>
        <h1>SIGN UP</h1>
        </div> */}
        <div className={`${styles.centertitle} ${styles.signupwindow}`}>
            <img className={styles.imagesize} src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo.c36eaf5e6.svg" alt='Leetcode logo'></img>
            <form className={`${styles.signupwindow}`} onSubmit={handleSubmit(onSubmit)}>

           
            <input type="text" placeholder="Username"  className={  `${errors?.username ? "error-select" : "" } ${styles.textbox}`}{...register("username")} />
            <small
                            className={`d-none ${errors?.username ? "error-input" : ""
                              }`}
                          >
                            {errors?.username?.message}
                          </small>
            <input type="password" placeholder="Password" className={  `${errors?.password ? "error-select" : "" } ${styles.textbox}`} {...register("password", { required: true, minLength: 8 })} />
            <small
                            className={`d-none ${errors?.password ? "error-input" : ""
                              }`}
                          >
                            {errors?.password?.message}
                          </small>
            {/* <input type="password" placeholder="Confirm password" className={  `${errors?.confirmpassowrd ? "error-select" : "" } ${styles.textbox}`} {...register("confirmpassowrd",{ required: true, minLength: 8 })} />
            <small
                            className={`d-none ${errors?.confirmpassowrd ? "error-input" : ""
                              }`}
                          >
                            {errors?.confirmpassowrd?.message}
                          </small> */}
            <input type="email" placeholder="E-mail address" className={  `${errors?.email ? "error-select" : "" } ${styles.textbox}`} {...register("email", { required: true })} />
            <small
                            className={`d-none ${errors?.email ? "error-input" : ""
                              }`}
                          >
                            {errors?.email?.message}
                          </small>
            <input type="submit" className={styles.submitbtn} value="Sign Up"/>
            </form>
        </div>
        </section>
        </>)
    
}
