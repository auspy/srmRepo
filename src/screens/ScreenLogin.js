import { useState } from "react";
import { Link } from "react-router-dom";

const ScreenLogin = (props) => {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  return (
    <>
      <div
        className="gcc"
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <div className="fcc">
          <Link to="/" className="frc" style={{ opacity: 1 }}>
            <img
              src={require("../static/images/logoIcon.png")}
              height={60}
              alt="srm logo"
            />
          </Link>
          <h2
            className="semi bColor mt10 "
            style={{
              fontSize: 30,
            }}
          >
            SRM Repository
          </h2>
          <h2
            className="light mt30 upper"
            style={{
              fontSize: 20,
              letterSpacing: 2,
            }}
          >
            Login
          </h2>

          <form className="fcc" name="login">
            <div className="fcfs mt15">
              <label htmlFor="getMail" className="regu13 notSelectColor">
                Emails
              </label>
              <input
                type={"email"}
                name={"getMail"}
                className={"mt5"}
                style={{
                  padding: "0px 15px",
                  border: "1px solid var(--darkBg)",
                  height: 50,
                  boxSizing: "border-box",
                  width: 340,
                  borderRadius: "5px",
                  color: "var(--heading)",
                }}
                maxLength={100}
                placeholder={"Email"}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="fcfs mt15">
              <label htmlFor="getMail" className="regu13 notSelectColor">
                Password
              </label>
              <input
                type={"password"}
                className="mt5 mb20"
                style={{
                  padding: "0px 15px",
                  border: "1px solid var(--darkBg)",
                  height: 50,
                  boxSizing: "border-box",
                  width: 340,
                  borderRadius: "5px",
                  color: "var(--heading)",
                }}
                maxLength={16}
                minLength={7}
                placeholder={"Password"}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </div>
            <input
              type={"submit"}
              name={"submitLogin"}
              form={"login"}
              className={" semi14 bColor caps"}
              style={{
                borderRadius: 20,
                padding: "10px 18px",
                width: "100%",
              }}
              value={"Continue"}
              disabled={!(pass && email)}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ScreenLogin;
