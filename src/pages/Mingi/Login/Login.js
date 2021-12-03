import "./Login.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function LoginMingi() {
	const [idValue, setIdValue] = useState("");
	function handleIdInput(e) {
		setIdValue(e.target.value);
	}

	const [pwValue, setPwValue] = useState("");
	const handlePwInput = (e) => setPwValue(e.target.value);
	console.log(pwValue);

	const confirmCondition =
		!(idValue.includes("@") && !idValue.includes("!", "@", "#", "$")) ||
		!(pwValue.length >= 8 && pwValue.includes("!", "@", "#", "$"));

	return (
		<div className="login">
			<body>
				<section className="loginBox">
					<h1>WeBucks</h1>
					<form className="formBox">
						<input
							className="innerBox"
							onChange={handleIdInput}
							value={idValue}
							id="id"
							type="text"
							placeholder="전화번호,사용자 이름 또는 이메일"
						/>
						<input
							className="innerBox"
							onChange={handlePwInput}
							value={pwValue}
							id="password"
							type="password"
							placeholder="비밀번호"
						/>
					</form>
					<section className="buttonBox">
						<Link to="/list-Mingi">
							<button disabled={confirmCondition} id="button">
								로그인
							</button>
						</Link>
					</section>
					<section className="findPw">
						<a href="/">비밀번호를 잊으셨나요?</a>
					</section>
				</section>
				<script src="js/login.js"></script>
			</body>
		</div>
	);
}

export default LoginMingi;
