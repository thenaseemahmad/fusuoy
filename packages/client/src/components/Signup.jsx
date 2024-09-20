import { useEffect, useState } from "react";
import { HighlightedButton, NormalButton } from "./basic/Button";
import Input from "./basic/Input";
import emailValidator from "email-validator";
import passwordValidator from "password-validator";
import axios from "axios";
import styles from "./UserAuthentication.module.css";

export default function Signup() {
  const [fName, setfName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => { }, [fName, email, password, confirmPassword]);
  async function handleSignupBtnClick() {
    await axios.post("https://fusuoy.dev/api/auth/signup", { fName, email, password })
      .then((result) => { console.log(result) })
      .catch((err) => { console.log(err) })
    setfName(null);
    setEmail(null);
    setPassword(null);
    setConfirmPassword(null);
  }
  let fNameWarnings = [];
  if (fName.length === 0) {
    fNameWarnings.push("Full name can't be blank");
  }
  const passwordValidatorSchema = new passwordValidator();
  passwordValidatorSchema
    .is()
    .min(8, "Must contains atleast 8 charactors")
    .has()
    .uppercase(1, "Must contains atleast 1 uppercase")
    .has()
    .lowercase(1, "Must contains atleast 1 lowercase")
    .has()
    .digits(2, "Must contains atleast 2 digits")
    .has()
    .symbols(1, "Must contains atleast 1 special charactor");


  let emailWarnings = [];
  if (!emailValidator.validate(email)) {
    emailWarnings.push("Invalid email");
  }

  let passwordWarnings = [];
  if (!passwordValidatorSchema.validate(password)) {
    passwordValidatorSchema
      .validate(password, { details: true })
      .forEach((item) => passwordWarnings.push(item.message));
  }

  let confirmPasswordWarnings = [];
  if (password !== confirmPassword) {
    confirmPasswordWarnings.push("Password and Confirm-password does not match")
  }
  let submitButtonDisable = true;
  if (fNameWarnings.length === 0 && emailWarnings.length === 0 && passwordWarnings.length === 0 && confirmPasswordWarnings.length === 0) {
    submitButtonDisable = false;
  }

  return (
    <>
      <Input
        onChange={(e) => setfName(e.target.value)}
        labelTitle="Full name"
        inputType="text"
        warnings={fNameWarnings}
      />

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
        warnings={passwordWarnings}
      />

      <Input
        onChange={(e) => setConfirmPassword(e.target.value)}
        labelTitle="Confirm-password"
        inputType="password"
        warnings={confirmPasswordWarnings}
      />

      <form action="" method="dialog" className={styles.dialogForm}>
        <span className={styles.dialogFormSpan}>
          <NormalButton>Cancel</NormalButton>
        </span>
        <span className={styles.dialogFormSpan}>
          <HighlightedButton onClick={handleSignupBtnClick} disabled={submitButtonDisable} >
            Signup
          </HighlightedButton>
        </span>
      </form>
    </>
  );
}
