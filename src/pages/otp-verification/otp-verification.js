import React, { useEffect } from "react";
import VerifyNumero from "./verify-numero";
import ResendCode from "./resend-code";
import './otp.css'
import 'bootstrap'
const OtpVerify = () => {
  useEffect(() => {
    const focusNext = (currentInput) => {
      const maxLength = parseInt(currentInput.getAttribute("maxlength"));
      const currentLength = currentInput.value.length;
      if (currentLength === maxLength) {
        const nextInput = currentInput.nextElementSibling;
        if (nextInput && nextInput.tagName === "INPUT") {
          nextInput.focus();
        }
      }
    };
    const otpInputs = document.querySelectorAll(".otp-input");
    otpInputs.forEach((input, index) => {
      input.addEventListener("input", () => {
        if (input.value.length === 1 && index < otpInputs.length - 1) {
          otpInputs[index + 1].focus();
        }
      });
      input.addEventListener("keydown", (event) => {
        if (
          event.key === "Backspace" &&
          input.value.length === 0 &&
          index > 0
        ) {
          otpInputs[index - 1].focus();
        }
      });
    });
  }, []);

  return (
    <div className="container">
      <div className="row my-2 ">
        <div className="col-lg-5 col-md-6 ">
          <center>
            <img src="../images/otp1.jpg" alt=" phone " />

            <br />
          </center>{" "}
        </div>{" "}
        <div className="col-lg-5 col-md-6 ">
          <VerifyNumero />
          <p className="text-center " style={{ color: "#ef9a11aa" }}>
            {" "}
            4: 59{" "}
          </p>{" "}
          <form>
            <div className="text-center ">
              <div className="code ">
                {" "}
                <input
                  type="text "
                  maxLength="1 "
                  className="otp-input"
                  pattern=" [0 - 9] { 1 }"
                  required
                />
                <input
                  type=" text "
                  maxLength="1 "
                  className="otp-input "
                  pattern=" [0 - 9] { 1 }"
                  required
                />{" "}
                <input
                  type="text "
                  maxLength="1 "
                  className="otp-input "
                  pattern=" [0 - 9] { 1 }"
                  required
                />{" "}
                <input
                  type="text "
                  maxLength="1 "
                  className="otp-input"
                  pattern=" [0 - 9] { 1 }"
                  required
                />{" "}
                <input
                  type="text "
                  maxLength="1 "
                  className="otp-input"
                  pattern=" [0 - 9] { 1 }"
                  required
                />{" "}
              </div>
              <button
                className="btn "
                style={{
                  width: "100%",
                  backgroundColor: "#EF9B11",
                  color: "white",
                  fontSize: "large",
                  fontWeight: "bolder",
                  borderRadius: "14px",
                  marginTop: "20px",
                }}
              >
                Confirm le code{" "}
              </button>{" "}
            </div>{" "}
          </form>{" "}
          <br />
          <div className="link">
            <ResendCode />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
export default OtpVerify;
