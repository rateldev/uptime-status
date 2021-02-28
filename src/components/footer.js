import React from "react";
import Link from "./link";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>
          Powered By <Link to="https://uptimerobot.com/" text="UptimeRobot" /> &{" "}
          <Link to="https://status.org.cn/" text="Uptime Status" />
        </p>
      </div>
    </div>
  );
};

export default Footer;
