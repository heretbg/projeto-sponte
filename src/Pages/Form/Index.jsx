import React from "react";
import * as Yup from "yup";
import { Formik, useField } from "formik";

const InputTexto = ({label, ...props}) => {
  const [campo, meta] = useField(props);

  return(
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...campo} {...props}></input>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

const Form = () => {
    const hoje = new Date();
  
    const valoresIniciais = {
      nome: "",
      descricao: "",
      altura: 0,
      largura: 0,
      comprimento: 0,
      peso: 0,
      codigoBarras: 0,
      categoria: "",
      valor: 0.0,
      dataAquisicao: hoje,
      imagem: "",
    };
  
    const schemaValidacao = Yup.object().shape({
      nome: Yup.string().required("Nome deve ser preenchido"),
      descricao: Yup.string()
        .min(1, "Descrição deve ter pelo menos 1 carácter")
        .max(100, "Descrição deve ter no máximo 100 carácteres")
        .required("Descrição deve ser preenchida"),
      peso: Yup.number().required("Peso deve ser preenchido"),
      codigoBarras: Yup.number().required("Código de barras deve ser preenchido"),
      categoria: Yup.string().required("Selecione pelo menos uma categoria"),
      valor: Yup.number()
        .positive("O valor deve ser positivo")
        .required("Valor deve ser preenchido"),
      dataAquisicao: Yup.date().max(
        hoje,
        "Data máxima de aquisição não deve ser superior à data atual"
      )});

      return(
        <Formik
        initialValues={valoresIniciais}
        validationSchema={schemaValidacao}
        onSubmit={(valores, {setSubmitting}) =>{
            alert(JSON.stringify(valores, null, 2));
            setSubmitting(false);
        }}>

        {props => (
          <Form>
            <h1>Inserir Produto</h1>
            <InputTexto label="Nome" name="nome" type="text" />
          </Form>
        )}

        </Formik>
      )  
}

export default Form;