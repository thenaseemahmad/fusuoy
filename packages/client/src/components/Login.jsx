import { useEffect, useState } from "react";
import { HighlightedButton, NormalButton } from "./basic/Button";
import Input from "./basic/Input";
import emailValidator from "email-validator";
import styles from "./UserAuthentication.module.css"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, [email, password]);
  function handleLoginBtnClick() {
    console.log(`Email: ${email}, Password: ${password}`);
  }

  let emailWarnings = []
  if(!emailValidator.validate(email)){
    emailWarnings.push("Invalid Email")
  }
  return (
    <>
      <Input
        onChange={(e) => setEmail(e.target.value)}
        labelTitle="Email"
        inputType="email"
        warnings={emailWarnings}
      />
      
      <Input
        onChange={(e) => setPassword(e.target.value)}
        labelTitle="Password"
        inputType="password"
        warnings={[]}
      />
      <form action="" method="dialog" className={styles.dialogForm}>
        <span className={styles.dialogFormSpan}>
          <NormalButton>Cancel</NormalButton>
        </span>
        <span className={styles.dialogFormSpan}>
          <HighlightedButton onClick={handleLoginBtnClick}>
            Login
          </HighlightedButton>
        </span>
      </form>
    </>
  );
}
