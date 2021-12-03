import React from 'react'
import style from './Login.scss';
import { useNavigate } from "react-router-dom";

const Login = () => {
    
    return (
        <div className='Login' >
            <div className='container'>
                <section>
                    <div>
                        <h1>WeBucks</h1>
                    </div>
                    <form>
                        <div>
                            <input type="text" id="ID" className='boxes' placeholder="전화번호, 사용자 이름 또는 이메일" />
                        </div>
                        <div>
                            <input type="password" id="password" className='boxes' placeholder="비밀번호" />
                        </div>
                        <button className='boxes' type='button' >
                            로그인
                        </button>
                    </form>
                    <div className='footer'>
                        비밀번호를 잊으셨나요?
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Login