import { forwardRef, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { HighlightedButton, NormalButton } from "./basic/Button";
import Login from "./Login";
import Signup from "./Signup";
import styles from "./UserAuthentication.module.css";

const UserAuthentication = forwardRef(function UserAuthentication({}, ref) {
  const [selectedAuthType, setSelectedAuthType] = useState("Login");

  function handleTypeOfSelectedForm(type) {
    if (type === "Login") {
      setSelectedAuthType("Login");
    } else if (type === "Signup") {
      setSelectedAuthType("Signup");
    }
  }

  const selectedForm = selectedAuthType === "Login" ? <Login /> : <Signup />;
  
  return createPortal(
    <dialog className={styles.authForm} ref={ref}>
      <div className={styles.topButtonsContainer}>
        {selectedAuthType==="Signup"? <HighlightedButton onClick={() => handleTypeOfSelectedForm("Signup")}>Signup</HighlightedButton>:<NormalButton onClick={() => handleTypeOfSelectedForm("Signup")}>Signup</NormalButton>}
        {selectedAuthType==="Login"?<HighlightedButton onClick={() => handleTypeOfSelectedForm("Login")} > Login </HighlightedButton>:<NormalButton onClick={() => handleTypeOfSelectedForm("Login")} > Login </NormalButton>}
      </div>
      {selectedForm}
      
    </dialog>,
    document.body
  );
});

export default UserAuthentication;
