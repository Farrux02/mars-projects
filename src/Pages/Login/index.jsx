import React, { useState, useRef } from "react";
import FormInput from "../../Components/Inputs";
import Button from "../../Components/Button";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/loginReducer";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [modmeId, setModmeId] = useState("");
  const [checkId, setCheckId] = useState("");
  const random = useRef(Math.floor(Math.random() * 999999 + 111111));
  const redirect = useNavigate();
  console.log(random);
  const loginReducer = useSelector((state) => state.login.modmeId);
  const dispatch = useDispatch();

  return (
    <div
      style={{ transform: "translate(-50%, -50%)" }}
      className="p-10 pt-20 absolute top-1/2 left-1/2 w-[500px] h-[300px] rounded-md bg-[#e0e0e0] shadow-3xl"
    >
      {loginReducer !== true ? (
        <form className="modme-form">
          <FormInput
            divClassName={"flex-col flex"}
            labelClassName={"text-3xl pb-4"}
            label={"Введите свой Modme ID"}
            name={"modme-id"}
            type={"text"}
            maxLength={"6"}
            value={modmeId}
            handleChange={(e) => {
              setModmeId(e.target.value);
              setModmeId(e.target.value.replace(/[^\d]/g, ""));
            }}
            required
            className={"rounded p-3 text-lg outline-0 h-[50px]"}
            placeholder={"192192"}
          />
          <Button
            onClick={() => {
              modmeId.length === 6
                ? dispatch(login(true))
                : console.log("error");
            }}
            btnClassName={"mt-6 bg-[blue] rounded w-[200px] h-[50px] text-white text-xl"}
            btnLabel={"Отправить"}
            btnType={"button"}
          />
        </form>
      ) : (
        <form className="modme-form">
          <FormInput
            divClassName={"flex-col flex"}
            labelClassName={"text-3xl pb-4"}
            label={"Введите код доступа"}
            name={"modme-id"}
            type={"text"}
            maxLength={"6"}
            errorMessage={"Введите код доступа"}
            value={checkId}
            handleChange={(e) => {
              setCheckId(e.target.value);
              setCheckId(e.target.value.replace(/[^\d]/g, ""));
            }}
            required
            className={"modme-form__input p-3 text-lg"}
            placeholder={"192192"}
          />
          <Button
            onClick={() => {
              +checkId === random.current && redirect("/projects");
            }}
            btnClassName={"modme-form__btn mt-6"}
            btnLabel={"Отправить"}
            btnType={"button"}
          />
        </form>
      )}
    </div>
  );
};

export default LoginPage;
