import { UseToastOptions } from "@chakra-ui/react";
import { RefObject } from "react";

type ValidateFormParams = {
  nameRef: RefObject<HTMLInputElement>;
  emailRef: RefObject<HTMLInputElement>;
  phoneRef: RefObject<HTMLInputElement>;
  messageRef: RefObject<HTMLTextAreaElement>;
};

export default function validateForm(
  refs: ValidateFormParams,
  toast: (options?: UseToastOptions) => void
) {
  let error = false;
  function validateName() {
    if (!refs.nameRef.current?.value) {
      refs.nameRef.current?.focus();
      toast({
        title: "Erro",
        description: "Por favor, digite seu nome",
        status: "error",
      });
      error = true;
    } else {
      const minMax = [2, 46];
      const nameRegex = new RegExp(
        `^[\\w'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{${minMax.toString()}}$`
      );
      if (!nameRegex.test(refs.nameRef.current?.value)) {
        refs.nameRef.current?.focus();
        toast({
          title: "Erro",
          description: "Por favor, digite um nome válido",
          status: "error",
        });
        error = true;
      }
    }
  }
  function validateEmail() {
    if (!refs.emailRef.current?.value) {
      refs.emailRef.current?.focus();
      toast({
        title: "Erro",
        description: "Por favor, digite seu e-mail",
        status: "error",
      });
      error = true;
    } else {
      const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
      if (!emailRegex.test(refs.emailRef.current?.value)) {
        refs.emailRef.current?.focus();
        toast({
          title: "Erro",
          description: "Por favor, digite um e-mail válido",
          status: "error",
        });
        error = true;
      }
    }
  }
  function validatePhone() {
    if (!refs.phoneRef.current?.value) {
      toast({
        title: "Erro",
        description: "Por favor, digite seu telefone",
        status: "error",
      });
      error = true;
    }
  }
  function validateMessage() {
    if (!refs.messageRef.current?.value) {
      refs.messageRef.current?.focus();
      toast({
        title: "Erro",
        description: "Por favor, digite sua mensagem",
        status: "error",
      });
      error = true;
    }
  }
  validateMessage();
  validatePhone();
  validateEmail();
  validateName();
  return error;
}
