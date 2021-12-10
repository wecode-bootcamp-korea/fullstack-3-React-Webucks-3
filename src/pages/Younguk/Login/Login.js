import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const goToList = () => {
    navigate("/list");
  };

  const [saveID, saveIDchange] = useState(''); // ID 입력을 위한 State
  const [savePW, savePWchange] = useState(''); // PW 입력을 위한 State

  const [showhide, showhideSet] = useState('password');
  const showhideChange = () => {
    if (showhide === 'password') {
      showhideSet('text')
    }
    else {
      showhideSet('password')
    }
  } // show&hide 기능 구현


  return (
    <>
      <section>
        <h1>WeBucks</h1>
        <div className="input">
          <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" class="userid"
            onChange={(e) => saveIDchange(e.target.value)} />
        </div>
        <div className="input">
          <input type={showhide} placeholder="비밀번호" className="pw"
            onChange={(e) => savePWchange(e.target.value)} />

          <button
            className="hide"
            onClick={showhideChange}>
            show&hide
          </button>
        </div>
      </section>

      <footer>
        <div className="btn">
          <button className="but" disabled={
            saveID.includes('@') && savePW.length >= 5 ?
              false : true
          }
            onClick={goToList}>로그인</button>
        </div>

        <div className="forget">
          <Link to='Detail'>비밀번호를 잊으셨나요?</Link>
        </div>
      </footer>
    </>
  );
}

export default Login