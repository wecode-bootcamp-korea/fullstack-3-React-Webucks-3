import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  // 로그인 버튼 클릭시 이동 경로 구현
  const navigate = useNavigate();

  const goToList = () => {
    navigate("/list-jongmin");
  };

  // 이메일 및 암호 입력시 state에 저장 구현
  const [emailInputState, setEmailInputState] = useState("");
  const [passwordInputState, setPasswordInputState] = useState("");

  const handleIdInput = (e) => {
    setEmailInputState(e.target.value);
  };

  const handlePwInput = (e) => {
    setPasswordInputState(e.target.value);
  };

  // 이메일 및 암호 조건 구현
  const validation =
    emailInputState.includes("@") && passwordInputState.length >= 5;

  // sessionStorage를 이용해서 로그인 아이디 데이터 저장

  sessionStorage.setItem("ID", emailInputState);

  return (
    <>
      <div className="Login">
        <section>
          <div id="logo">WeBucks</div>
          <div id="login-container">
            <input
              type="text"
              id="emailInput"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleIdInput}
              value={emailInputState}
            />
            <input
              type="password"
              id="passwordInput"
              placeholder="비밀번호"
              onChange={handlePwInput}
              value={passwordInputState}
            />
            <button
              id="login-button"
              type="submit"
              onClick={goToList}
              style={{
                backgroundColor: validation
                  ? "#60ADED"
                  : "#add3eb" /* 이메일 및 암호 조건에 따라 버튼 색상 변경 */,
              }}
            >
              로그인
            </button>
            {/* <Link to="/list" id="login-button">
              로그인
            </Link> */}
          </div>
          <div id="forgot-password">
            <p>비밀번호를 잊으셨나요?</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
