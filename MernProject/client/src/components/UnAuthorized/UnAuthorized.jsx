import React from "react";

const UnAuthorized = () => {
  const unauthorizedStyle = {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  };

  const headingStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    fontSize: "1.2em",
  };

  return (
    <div style={unauthorizedStyle}>
      <h1 style={headingStyle}>Unauthorized</h1>
      <p style={paragraphStyle}>
        You do not have permission to access this page.
      </p>
    </div>
  );
};

export default UnAuthorized;
