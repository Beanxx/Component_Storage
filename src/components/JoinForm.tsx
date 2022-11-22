import React from "react";
import styled from "styled-components";
import LoginInput from "./LoginInput";
import BasicBtn from "./BasicBtn";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "닉네임을 3글자 이상으로 입력해주세요.")
    .required("닉네임을 필수로 입력해주세요."),
  email: yup
    .string()
    .email("이메일 형식을 맞춰서 입력해주세요.")
    .required("이메일을 필수로 입력해주세요."),
  password: yup
    .string()
    .min(3, "비밀번호를 3~16글자로 입력해주세요.")
    .max(16, "비밀번호를 3~16글자로 입력해주세요.")
    .matches(
      /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W))/,
      "비밀번호에 영문, 숫자, 특수문자를 포함해주세요."
    )
    .required("비밀번호를 필수로 입력해주세요."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
});

const JoinForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Form id="join" onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <LoginInput id="name" type="text" register={register("name")}>
            NickName
          </LoginInput>
          {errors.name && <Message>{errors.name.message}</Message>}
        </Box>

        <Box>
          <LoginInput id="email" type="email" register={register("email")}>
            Email
          </LoginInput>
          {errors.email && <Message>{errors.email.message}</Message>}
        </Box>

        <Box>
          <LoginInput
            id="password"
            type="password"
            register={register("password")}
          >
            Password
          </LoginInput>
          {errors.password && <Message>{errors.password.message}</Message>}
        </Box>

        <Box>
          <LoginInput
            id="confirm-password"
            type="password"
            register={register("confirmPassword")}
          >
            Confirm Password
          </LoginInput>
          {errors.confirmPassword && (
            <Message>{errors.confirmPassword.message}</Message>
          )}
        </Box>

        <BtnBox>
          <BasicBtn disabled={isSubmitting} btnType="highlighted" type="submit">
            Sign up
          </BasicBtn>
        </BtnBox>
      </Form>
    </Container>
  );
};

export default JoinForm;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f1f2f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Arial";

  svg {
    margin: 0 4px;
  }
`;

const Form = styled.form`
  width: 300px;
  height: 380px;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  background-color: #fff;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  padding: 20px;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Message = styled.div`
  width: 100%;
  color: red;
  font-size: 11px;
  padding-left: 3px;
`;

const Box = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const BtnBox = styled.div`
  margin-top: 1rem;
`;
