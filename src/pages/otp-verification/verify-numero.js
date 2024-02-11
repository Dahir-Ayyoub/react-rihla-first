import React from "react";
const VerifyNumero = () => {
    return (
      <>
        <div
          className="text-center"
          style={{ fontFamily: "Roboto, Times, serif", fontSize: "larger" }}
        >
          <b> Verify Votre Numero </b>{" "}
        </div>{" "}
        <br />
        <div
          className="text-center"
          style={{ color: "rgba(213, 196, 174, 0.948)" }}
        >
          {" "}
          Entrer le 5 digit code de verification{" "}
        </div>{" "}
        <br />
      </>
    );
  };

export default VerifyNumero;