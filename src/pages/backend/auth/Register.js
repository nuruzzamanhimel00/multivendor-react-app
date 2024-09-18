import React, {useState} from 'react'
import '../../../assets/css/main.css'
import '../../../assets/css/util.css'
//react icon
import { AiFillGoogleCircle, AiFillFacebook, AiFillGithub, AiFillEye ,AiFillEyeInvisible   } from "react-icons/ai";

// //uuid
// import { v4 as uuidv4 } from 'uuid';

//components
import ToasterNotification from '../../../components/TosterNotification.js'

// //nprogress
// import NProgress from "nprogress";

//react router
import {  NavLink } from "react-router-dom";

import { useFormik } from 'formik';

const rules= [
    { message: "1 number", regex: /[0-9]+/ },
    {
      message: "1 special charecter(@#!?&)",
      regex: /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
    },
    { message: "at least one upper case.", regex: /[A-Z]+/ },
    { message: "at least one lower case.", regex: /[a-z]+/ },
    // { message: "8 characters minimum.", regex: /.{8,}/ },
  ]

const initialValues  =  {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  }

  // which keys are symmetrical to our values/initialValues
const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 50) {
      errors.name = "Must be 50 characters or less";
    }
  
    if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
  
    if (!values.password) {
      errors.password = "Required";
    }else if (values.password.length < 8 || values.password.length > 16) {
        errors.password = "8-16 characters";
      }
      else{
        for (let condition of rules) {
            if (!condition.regex.test(values.password)) {
                errors.password = condition.message;
            }
          }
      }

      if (!values.confirm_password) {
        errors.confirm_password = "Required";
      }
      else if(values.confirm_password !== values.password){
        errors.confirm_password = 'Password does not match'
      }
  
    return errors;
  };
  

const Register = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)

      //formik

      const formik = useFormik({
        initialValues: initialValues,
    
        validate,
        onSubmit: async (values, { resetForm }) => {
        //   NProgress.start();
    
        //   await httpRequest({
        //     url: values.method_type === 'create' ? categoryUrl : categoryUrl+"/"+values.id,
        //     method: values.method_type === 'create' ? "POST" : "PUT",
        //     headers: authHeaders(),
        //     body: values,
        //   })
        //     .then((response) => {
        //       NProgress.done();
        //       if (response.hasOwnProperty('errors')) {
        //         Object.keys(response.errors).forEach((key) => {
        //           dispatch(
        //             toasterActions.addToast({
        //               id: new Date().getTime(),
        //               severity: "error",
        //               summary: "Error Message",
        //               detail: response.errors[key][0],
        //               life: 3000,
        //             })
        //           );
                
        //         })
              
        //       } else {
        //           // // Reset the form to initial values
        //         resetForm();
        //         if (response && response.status) {
        //           setShow(false);
        //           reloadDatatableHandler();
        //           dispatch(
        //             toasterActions.addToast({
        //               id: new Date().getTime(),
        //               severity: "success",
        //               summary: "Success Message",
        //               detail: response.message,
        //               life: 3000,
        //             })
        //           );
        //         }
        //       }
            
            
        //     })
            
        },
      });
  
      
    return (
        <div className="limiter">
			    <ToasterNotification />        
			<div className="container-login100" style={{backgroundImage:  `url(${
				"/assets/images/bg-01.jpg"
				})`}} >
			
				<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
					<form className="login100-form validate-form" onSubmit={formik.handleSubmit} >
						<span className="login100-form-title p-b-49">
							Register
						</span>

						<div className="wrap-input100 validate-input m-b-23" data-validate = "name is reauired">
							<span className="label-input100">Name</span>
							<input className="input100" type="text" name="name" placeholder="Type your name"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              defaultValue={formik.values.name}
							
							/>
                              {formik.errors.name && formik.touched.name ? (
                            <div className="text-danger">
                                {formik.errors.name}
                            </div>
                            ) : null}
						</div>
						<div className="wrap-input100 validate-input m-b-23" data-validate = "email is reauired">
							<span className="label-input100">Email</span>
							<input className="input100" type="email" name="email" placeholder="Type your email"
							 onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             defaultValue={formik.values.email}
							/>
                              {formik.errors.email && formik.touched.email ? (
                            <div className="text-danger">
                                {formik.errors.email}
                            </div>
                            ) : null}
						</div>

						<div className="wrap-input100 validate-input" >
							<span className="label-input100">Password</span>
							<div style={{
								display: 'flex'
							}}>
								<input className="input100" type={
									isShowPassword ? "text" : "password"
								} name="password" placeholder="Type your password" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                defaultValue={formik.values.password}
								/>
								{
									isShowPassword ? <AiFillEyeInvisible onClick={() => setIsShowPassword(!isShowPassword)} style={{
										marginTop:'18px'
									}} /> :  <AiFillEye
									onClick={() => setIsShowPassword(!isShowPassword)}
									style={{
										marginTop:'18px'
									}} />
								}
							</div>
						
                            {formik.errors.password && formik.touched.password ? (
                            <div className="text-danger">
                                {formik.errors.password}
                            </div>
                            ) : null}
						</div>
						<div className="wrap-input100 validate-input" data-validate="Password is required">
							<span className="label-input100">Confirm Password</span>
							<div style={{
								display: 'flex'
							}}>
								<input className="input100" type={
									isShowConfirmPassword ? "text" : "password"
								} name="confirm_password" placeholder="Type your confirm password" 
								onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                defaultValue={formik.values.confirm_password}
								/>
								{
									isShowConfirmPassword ? <AiFillEyeInvisible onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)} style={{
										marginTop:'18px'
									}} /> :  <AiFillEye
									onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
									style={{
										marginTop:'18px'
									}} />
								}
							</div>
						
						    {formik.errors.confirm_password && formik.touched.confirm_password ? (
                            <div className="text-danger">
                                {formik.errors.confirm_password}
                            </div>
                            ) : null}
						</div>
						
					
						
						<div className="container-login100-form-btn">
							<div className="wrap-login100-form-btn">
								<div className="login100-form-bgbtn"></div>
								<button className="login100-form-btn">
									Sign Up
								</button>
							</div>
						</div>

						<div className="txt1 text-center p-t-54 p-b-20">
							<NavLink to="/admin/login">
								Or Sign In Using
							</NavLink>
						</div>

						<div className="flex-c-m">
						
							<AiFillGithub className="login100-social-item bg1" /> 
							<AiFillFacebook className="login100-social-item bg2" />
							<AiFillGoogleCircle className="login100-social-item bg3"/>
						</div>

						
					</form>
				</div>
			</div>
		</div>
    )
}

export default Register