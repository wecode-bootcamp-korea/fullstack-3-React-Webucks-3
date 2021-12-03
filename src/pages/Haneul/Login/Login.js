import React from 'react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import './Login.scss';

function Login() {

  const [id, setid] = useState("");
  const [pw, setpw] = useState("");

  // id 값 변경
  const handleIdInput = e => {
    setid(e.target.value);
  }
  // pw 값 변경
  const handlePwInput = e => {
    setpw(e.target.value);
  }

  // 비밀번호 hide or show
  const hideOrShow = e => {
    const pwDom = document.querySelector("#user-pw");
    if (pwDom.type === "password") {
      pwDom.type = "text";
      e.target.innerHTML = "🙈";
    } else {
      pwDom.type = "password";
      e.target.innerHTML = "🙉";
    }
  }

  // 비밀번호 정규식
  const num = pw.search(/[0-9]/g);
  const en = pw.search(/[a-z]/gi);
  const specialChr = pw.search(/[`~!@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  // 버튼 활성화 id, pw 조건
  const condition = (id.includes('@')) && (pw.length >= 8 && num > -1 && en > -1 && specialChr > -1);

  // 리스트 페이지로 이동, id 값 세션 스토리지에 저장
  const navigate = useNavigate();
  const goToList = () => {
    if(condition) {
      sessionStorage.setItem("id", id);
      navigate("/list-haneul");
    }
    else {
      alert('아이디나 비밀번호를 확인해주세요.');
    }
  }

  return (
    <section id="login">
      <h1 className="login-title">WeBucks</h1>
      <form>
        <div className="login-input">
          <input
            type="text" id="user-id" placeholder="전화번호, 사용자 이름 또는 이메일" onChange={handleIdInput} style={{ borderColor: id.includes("@") ? "green" : "#e3e3e3" }}/>
        </div>
        <div className="login-input">
          <input type="password" id="user-pw" placeholder="비밀번호" onChange={handlePwInput} style={{ borderColor : (pw.length >= 8 && num > -1 && en > -1 && specialChr > -1) ? "green" : "#e3e3e3" }} />
          <button type="button" id="user-pw__btn" onClick={ hideOrShow }>🙉</button>
        </div>
        <div>
          <button type="button" className="login-button" onClick={goToList} style={{ backgroundColor: condition ? "#0096f6" : "#C0DFFD" }}
          >
          로그인
          </button>
        </div>
      </form>
      <div>
        <a href="#!" className="find-pw">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </section>
  );
}

export default Login;
