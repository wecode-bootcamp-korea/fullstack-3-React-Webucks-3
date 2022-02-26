import React from 'react';
import './Login.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const [ID, setID] = useState('');
  const [PW, setPW] = useState('');
  const navigate = useNavigate();

  let dataStatus;

  function handleIdInput(event) {
    setID(event.target.value);
  }

  function handlePWInput(event) {
    setPW(event.target.value);
  }

  // 외부에서 만들어진 로그인 api 주소
  // "http://52.79.143.176:8000/users/login"

  function handleClick() {
    // fetch("http://localhost:8000/users/signin", {
    //   mode: "cors",
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: ID,
    //     password: PW,
    //   }),
    // })
    //   .then((res) => {
    //     dataStatus = res.status;
    //     res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     if (dataStatus === 200) {
    //       navigate("/list");
    //     }
    //   });
    navigate('/list');
  }

  function changeButton(id, pw) {
    return id.includes('@') && pw.length > 7 ? false : true;
  }

  const color = changeButton(ID, PW) ? '#ADD3EA' : '#60ADED';

  return (
    <div className="Login">
      <div className="container">
        <section>
          <div>
            <h1>WeBucks</h1>
          </div>
          <form>
            <div>
              <input
                type="text"
                id="ID"
                className="boxes"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={handleIdInput}
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                className="boxes"
                placeholder="비밀번호"
                onChange={handlePWInput}
              />
            </div>
            <button
              className="boxes"
              type="button"
              onClick={handleClick}
              style={{ backgroundColor: color }}
              disabled={changeButton(ID, PW)}
            >
              로그인
            </button>
          </form>
          <div className="footer">비밀번호를 잊으셨나요?</div>
        </section>
      </div>
    </div>
  );
};

export default Login;
