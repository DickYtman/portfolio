import { useState } from "react";
import { motion } from "framer-motion";
import "./aboutMe.scss";

const AboutMe = () => {
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const toggleAboutMe = () => {
    setIsAboutMeVisible(!isAboutMeVisible);
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <motion.div
      className="about-me-container"
      initial={{ y: "100%" }}
      animate={{ y: isAboutMeVisible ? 0 : "100.5%" }}
      transition={{ type: "spring", stiffness: 30 }}
    >
      <motion.button
        className={`about-me-btn ${isButtonClicked ? "clicked" : ""}`}
        onClick={toggleAboutMe}
      >
        About Me
        <span className={`arrow ${isButtonClicked ? "down" : "up"}`}></span>
      </motion.button>

      <motion.div
        className="about-me-card"
        // initial={{ y: "200%" }}
        // animate={{ y: isAboutMeVisible ? 0 : "60%" }}
        // transition={{ type: "spring", stiffness: 30 }}
      >
        <p>
          I'm a software developer and electronics automation technician with a
          passion for innovation and technology. My journey began in 2018 when I
          started as a WordPress site builder and digital marketer. I loved
          targeting audiences using social media and SEO to create impactful
          digital promotions.
          <span style={{ display: "block", height: "20px" }}></span>
          After a few years, I shifted my focus to automation and electronics,
          working as an automation technician. I gained valuable experience
          programming controllers and wiring digital and analog sensors for
          industrial automation.
          <span style={{ display: "block", height: "20px" }}></span>
          Today, I build applications that allow you to see real-time data from
          your sensors and view historical data through clear graphs, making it
          easy to analyze and monitor changes over time. This is perfect for
          anyone who wants to stay informed about their environment in a smart
          and efficient way.
          <span style={{ display: "block", height: "20px" }}></span>I use
          reliable hardware and connect everything to your mobile device, so you
          can see live readings from your sensors. Plus, all your data is saved
          on a secure server, allowing you to access and analyze it whenever you
          need. Whether you're looking to automate your home or keep track of
          specific conditions, I'm here to provide a seamless and intuitive
          solution.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
