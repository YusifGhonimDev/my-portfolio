import Button from "react-bootstrap/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import "./Header.css";
import CV from "../../assets/yusifghonim-cv.pdf";

const Header = () => {
  const webTech = ["HTML5", "CSS3", "JS(ES6)", "React"];
  const mobileTech = ["Dart", "Flutter", "Firebase", "SQL"];
  const buildListTech = (tech) => {
    const list = [];
    let i = 0;
    for (const name of tech) {
      const listItem = (
        <Fragment key={i}>
          <li>
            <p>
              <FontAwesomeIcon icon={faArrowRight} /> {name}
            </p>
          </li>
        </Fragment>
      );
      list.push(listItem);
      i++;
    }
    return list;
  };
  return (
    <header id="about">
      <div className="title-desc">
        <h1>Hi, my name is</h1>
        <h1>Yusif Ghonim, I'm a front end engineer.</h1>
        <p className="description">
          I enjoy building products that live on the internet like web apps.
          <br /> My goal is to always build products that provide pixel-perfect,
          performant experiences. <br /> Currently, I finished my Bachelor's
          degree in Computer Science and Engineering, as well as doing
          freelancing where i work on a wide variety of interesting and
          meaningful projects on a daily basis.
        </p>
        <p>Here are a few technologies I've been working with recently:</p>
        <ul className="tech-list">
          <div className="web-tech">{buildListTech(webTech)}</div>
          <div className="mobile-tech">{buildListTech(mobileTech)}</div>
        </ul>
      </div>
      <a href={CV} download="YusifGhonim CV">
        <Button className="resume-btn" variant="outline-dark" download>
          Download Resume
        </Button>
      </a>
    </header>
  );
};

export default Header;
