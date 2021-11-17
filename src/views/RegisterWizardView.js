import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FullnameForm from "../components/register-steps/FullnameForm";
import PasswordForm from "../components/register-steps/PasswordForm";
import BirthdayForm from "../components/register-steps/BirthdayForm";
import UsernameForm from "../components/register-steps/UsernameForm";
import Confirm from "../components/register-steps/Confirm";

const RegisterWizardView = () => {
  const [step, setStep] = useState(1);
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [username, setUsername] = useState("");

  const continues = () => {
    setStep(step + 1);
  };

  const back = () => {
    setStep(step - 1);
  };

  const signUp = () => {};

  const values = { fullname, password, birthday, username };

  return (
    <>
      {step === 1 ? (
        <FullnameForm
          values={values}
          handleChange={setFullname}
          continues={continues}
        />
      ) : step === 2 ? (
        <PasswordForm
          values={values}
          handleChange={setPassword}
          continues={continues}
        />
      ) : step === 3 ? (
        <BirthdayForm
          values={values}
          handleChange={setBirthday}
          continues={continues}
        />
      ) : step === 4 ? (
        <UsernameForm
          values={values}
          handleChange={setUsername}
          continues={continues}
        />
      ) : step === 5 ? (
        <Confirm values={values} signUp={signUp} />
      ) : (
        <View></View>
      )}
    </>
  );
};

export default RegisterWizardView;

const styles = StyleSheet.create({});
