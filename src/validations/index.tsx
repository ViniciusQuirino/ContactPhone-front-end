import * as yup from "yup";

export const schemaLogin = yup.object({
  email: yup.string().required("E-mail obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});
const brazilianPhoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/gi;

export const schemaSignup = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup
    .string()
    .required("E-mail obrigatório")
    .email("Preencher o email corretamente"),
  password: yup
    .string()
    .required("Senha obrigatória!")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter um caracter especial")
    .matches(/.{8,}/, "Deve ter no mínimo 8 digitos"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha"
    ),
  telefone: yup
    .string()
    .required("required")
    .matches(brazilianPhoneRegex, "Telefone não é valido"),
});

// --------------------------CONTACT----------------------

export const schemaAddContact = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().notRequired().email("Preencher o email corretamente"),
  telefone: yup
    .string()
    .required("O telefone é obrigatório")
    .matches(brazilianPhoneRegex, "Telefone não é valido"),
});

export const schemaEditContact = yup.object({
  name: yup.string().notRequired(),
  email: yup.string().notRequired().email("Preencher o email corretamente"),
  telefone: yup
    .string()
    .notRequired()
    .matches(brazilianPhoneRegex, "Telefone não é valido"),
});

export const schemaEditUser = yup.object({
  id:yup.string().notRequired(),
  name: yup.string().notRequired(),
  email: yup.string().notRequired().email("Preencher o email corretamente"),
  telefone: yup
    .string()
    .notRequired()
    .matches(brazilianPhoneRegex, "Telefone não é valido"),
});
