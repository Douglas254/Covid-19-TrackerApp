import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="bg-gray-900">
        <p className="text-white text-center py-10">
          Made with <i className="fa fa-heart" style={{ color: "red" }}></i>{" "}
          love by{" "}
          <a
            href="https://github.com/douglas254"
            style={{ color: "#33fffc", fontSize: 24 }}
          >
            douglas254
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
