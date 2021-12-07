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

	const [okColor, setOkColor] = useState({
		idBorderColor: "#dedede",
		idBackgroundColor: "hsl(0deg 0% 97%)",
		pwBorderColor: "#dedede",
		pwBackgroundColor: "hsl(0deg 0% 97%)",
	});

	const Condition = () => {
		if (idValue.includes("@")) {
			setOkColor((prevState) => ({
				...prevState,
				idBorderColor: "lightgreen",
				idBackgroundColor: "#90ee9098",
			}));
		} else if (!idValue.includes("@")) {
			setOkColor((prevState) => ({
				...prevState,
				idBorderColor: "#dedede",
				idBackgroundColor: "hsl(0deg 0% 97%)",
			}));
		}
		if (pwValue.length >= 8 && pwValue.includes("!", "@", "#", "$")) {
			setOkColor((prevState) => ({
				...prevState,
				pwBorderColor: "lightgreen",
				pwBackgroundColor: "#90ee9098",
			}));
		} else if (!(pwValue.length >= 8 && pwValue.includes("!", "@", "#", "$"))) {
			setOkColor((prevState) => ({
				...prevState,
				pwBorderColor: "#dedede",
				pwBackgroundColor: "hsl(0deg 0% 97%)",
			}));
		}
	};

	const confirmCondition =
		!idValue.includes("@") ||
		!(pwValue.length >= 8 && pwValue.includes("!", "@", "#", "$"));

	const [pwShow, setPwShow] = useState({ type: "password", text: "show" });

	const pwShowCtl = (e) => {
		if (pwShow.text === "show") {
			e.preventDefault();
			setPwShow((prevState) => ({
				...prevState,
				type: "text",
				text: "hide",
			}));
		} else {
			e.preventDefault();
			setPwShow({ type: "password", text: "show" });
		}
	};
	return (
		<div className="login">
			<body>
				<section className="loginBox">
					<h1>WeBucks</h1>
					<form className="formBox">
						<input
							className="innerBox"
							onChange={handleIdInput}
							onKeyUp={Condition}
							value={idValue}
							style={{
								borderColor: okColor.idBorderColor,
								backgroundColor: okColor.idBackgroundColor,
							}}
							id="id"
							type="text"
							placeholder="전화번호,사용자 이름 또는 이메일"
						/>
						<input
							className="innerBox"
							onChange={handlePwInput}
							onKeyUp={Condition}
							value={pwValue}
							style={{
								borderColor: okColor.pwBorderColor,
								backgroundColor: okColor.pwBackgroundColor,
							}}
							id="password"
							type={pwShow.type}
							placeholder="비밀번호"
						/>
						<button className="typeChangeBtn" onClick={pwShowCtl}>
							{pwShow.text}
						</button>
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
