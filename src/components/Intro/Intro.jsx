import "./intro.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
  const animatedTextRef = useRef();
  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      backDelay: 2000,
      backSpeed: 60,
      placeholder: false,
      cursorChar: "?",
      strings: ["React.js Developer"],
    });
  }, []);
  return (
    <section className="intro" id="intro">
      <div className="intro__inner">
        <div className="intro__left">
          <img
            src="https://images.unsplash.com/photo-1592609931041-40265b692757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZ3JhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="program"
          />
        </div>
        <div className="intro__right">
          <div className="intro__right--inner">
            <h1 className="intro__titile">hello World</h1>
            <h2 className="intro__titile2">Jon Doe</h2>
            <h3>
              <span ref={animatedTextRef}></span>
            </h3>
            <a href="#portfolio">
              <KeyboardArrowDownIcon className="intro__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Intro;
