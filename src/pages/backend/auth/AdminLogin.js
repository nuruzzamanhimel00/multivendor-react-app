import React, {useState} from 'react'
import '../../../assets/css/main.css'
import '../../../assets/css/util.css'
//react icon
import { AiFillGoogleCircle, AiFillFacebook, AiFillGithub, AiFillEye ,AiFillEyeInvisible   } from "react-icons/ai";


const AdminLogin = () =>{

    const [input, setInput] = useState({
        email:'admin@app.com',
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


    return (
        <div className="limiter">
        
		<div className="container-login100" style={{backgroundImage:  `url(${
             "/assets/images/bg-01.jpg"
            })`}} >
		
			<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form className="login100-form validate-form">
					<span className="login100-form-title p-b-49">
						Login
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
                            } name="pass" placeholder="Type your password" 
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
							Or Sign Up Using
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

export default AdminLogin;