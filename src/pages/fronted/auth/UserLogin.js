import React, {useState} from 'react'
import '../../../assets/css/main.css'
import '../../../assets/css/util.css'
//react icon
import { AiFillGoogleCircle, AiFillFacebook, AiFillGithub, AiFillEye ,AiFillEyeInvisible   } from "react-icons/ai";
// //services
import {httpRequest} from '../../../services/AllServices.js'

// //api
import {userLoginUrl} from "../../../helpers/apiRoutes/index.js"

//react router
//react router
import { useNavigate, NavLink } from "react-router-dom";

//redux
import {addToaster} from "../../../store/toaster-slice.js"
import { useDispatch } from 'react-redux'
import {setLoginData} from "../../../store/backend/auth-slice.js"

//uuid
import { v4 as uuidv4 } from 'uuid';

//components
import ToasterNotification from '../../../components/TosterNotification.js'

//nprogress
import NProgress from "nprogress";

const UserLogin = () =>{
	const navigate = useNavigate();

    const dispatch = useDispatch()

    const [input, setInput] = useState({
        email:'user@app.com',
        password:'12345678'
    })

    const [isShowPassword, setIsShowPassword] = useState(false)

    const inputChangeHandler = (e) =>{
        const {name, value} = e.target
        setInput({
            ...input,
            [name]: value
        })
    }
	const submitHandler = async (e) =>{
	
		e.preventDefault()
		NProgress.start();
		// console.log(input)
		if(input.email !== '' && input.password !== ''){
			await httpRequest({
				url: userLoginUrl,
				method: "POST",
				headers: {
				  "Content-Type": "application/json",
				},
				body: {
				  email: input.email,
				  password: input.password,
				},
			  }).then((response) =>{
				console.log('response',response)
				if(response.status){
					
					//success message
					dispatch(addToaster(
						{id:uuidv4(),severity:'success', summary: 'Success', detail:response.message, life: 3000}
					))
					
					//admin token store
					dispatch(setLoginData({
						token: response.token,
                		user: response.user,
					}))
					//redirect dashboard
					navigate("/");
				}else{
					dispatch(addToaster(
						{id:uuidv4(),severity:'error', summary: 'Error', detail:response.message, life: 3000}
					))
				}
			  }).catch((error) =>{
				  console.log('errors', error)
			  })
			NProgress.done();
		}else{
			NProgress.done();
			dispatch(addToaster(
				{id:uuidv4(),severity:'error', summary: 'Error', detail:'All Field is required', life: 3000}
			))
			// toast.current.show({ severity: 'info', summary: 'Info', detail: 'Message Content' });
			// alert('please enter email and password')
		}
	}


    return (
        <div className="limiter">
			    <ToasterNotification />        
			<div className="container-login100" style={{backgroundImage:  `url(${
				"/assets/images/bg-01.jpg"
				})`}} >
			
				<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
					<form className="login100-form validate-form" onSubmit={submitHandler}>
						<span className="login100-form-title p-b-49">
							User Login
						</span>

						<div className="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
							<span className="label-input100">Username</span>
							<input className="input100" type="email" name="email" placeholder="Type your email"
							onChange={inputChangeHandler}
							defaultValue={input.email} />
							<span className="focus-input100" data-symbol="&#xf206;"></span>
						</div>

						<div className="wrap-input100 validate-input" data-validate="Password is required">
							<span className="label-input100">Password</span>
							<div style={{
								display: 'flex'
							}}>
								<input className="input100" type={
									isShowPassword ? "text" : "password"
								} name="password" placeholder="Type your password" 
								onChange={inputChangeHandler}
								defaultValue={input.password}/>
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
						
							<span className="focus-input100" data-symbol="&#xf190;"></span>
						</div>
						
						<div className="text-right p-t-8 p-b-31">
							{/* <a href="#">
								Forgot password?
							</a> */}
							<span>
							Forgot password?
							</span>
						</div>
						
						<div className="container-login100-form-btn">
							<div className="wrap-login100-form-btn">
								<div className="login100-form-bgbtn"></div>
								<button className="login100-form-btn">
									Login
								</button>
							</div>
						</div>

						<div className="txt1 text-center p-t-54 p-b-20">
							<span>
							<NavLink to="/register">
							 Sign Up Using
								</NavLink><br></br>
							<NavLink to="/">
							Or Home page
								</NavLink>
							
							</span>
						</div>

						<div className="flex-c-m">
						
							<AiFillGithub className="login100-social-item bg1" /> 
							<AiFillFacebook className="login100-social-item bg2" />
							<AiFillGoogleCircle className="login100-social-item bg3"/>
						</div>

						<div className="flex-col-c p-t-10">
							<span className="txt1 p-b-17">
								Or Sign Up Using
							</span>
							<span className="txt1 p-b-17">
							Sign Up
							</span>
							{/* <a href="#" className="txt2">
								Sign Up
							</a> */}
						</div>
					</form>
				</div>
			</div>
		</div>
    )
}

export default UserLogin;