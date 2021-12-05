import React from 'react'
import style from './Login.scss';
import { useState } from "react";
import { useNavigate } from 'react-router'

const Login = () => {
    const [ID, setID] = useState('');
    const [PW, setPW] = useState('');
    let navigate = useNavigate(); 
    function handleIdInput(event){
        setID(event.target.value);
        console.log(ID);
    }
    function handlePWInput(event){
        setPW(event.target.value);
        console.log(PW);
    }
    function goList(){
        navigate('/list')
    }
    function changeButton(id,pw){
        return id.includes('@') && pw.length>7 ? false : true
    }
    
    const color = changeButton(ID,PW) ?  '#ADD3EA' : '#60ADED'
    return (
        <div className='Login' >
            <div className='container'>
                <section>
                    <div>
                        <h1>WeBucks</h1>
                    </div>
                    <form>
                        <div>
                            <input type="text" id="ID" className='boxes' placeholder="전화번호, 사용자 이름 또는 이메일" onChange = {handleIdInput} />
                        </div>
                        <div>
                            <input type="password" id="password" className='boxes' placeholder="비밀번호" onChange = {handlePWInput} />
                        </div>
                        
                        <button className='boxes' type='button' onClick={goList} style={{backgroundColor : color}} disabled={changeButton(ID,PW)}>
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