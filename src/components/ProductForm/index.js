import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import {
  Container,
  MedidasDiv,
  Medidas,
  CheckBox,
  CheckBoxLabel,
  Botoes,
  Button,
} from "./styles";
import CustomInput from "../CustomInput/index";
import Thumb from "../Thumb";

function ProductForm({ data, handleSave }) {
  const hoje = new Date();

  const [valoresIniciais, setFormValues] = useState({
    nome: "",
    descricao: "",
    altura: 0,
    largura: 0,
    comprimento: 0,
    peso: 0,
    codigoBarras: 0,
    categorias: [{}],
    valor: 0,
    dataAquisicao: hoje,
    imagem: null,
  });

  useEffect(() => {
    if (data) {
      setFormValues(data);
    }
  }, [setFormValues, data]);

  const handleSubmit = (values) => {
    if (data && data.id) {
      handleSave(data.id, values);
    } else {
      handleSave(values);
    }
  };

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Nome deve ser preenchido"),
    descricao: Yup.string()
      .min(1, "Descrição deve ter pelo menos 1 caractere")
      .max(100, "Descrição deve ter no máximo 100 caracteres")
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
    ),
    imagem: Yup.mixed().required("Carregue uma imagem"),
  });

  return (
    <Container>
      <Formik
        enableReinitialize
        initialValues={valoresIniciais}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, setFieldValue }) => (
          <Form>
            <h1>Produtos</h1>
            <CustomInput label="Nome" name="nome" type="text" />
            <CustomInput label="Descrição" name="descricao" type="text" />
            <MedidasDiv>
              <Medidas>
                <CustomInput label="Altura" name="altura" type="number" />
              </Medidas>
              <Medidas>
                <CustomInput label="Largura" name="largura" type="number" />
              </Medidas>
              <Medidas>
                <CustomInput
                  label="Comprimento"
                  name="comprimento"
                  type="number"
                />
              </Medidas>
            </MedidasDiv>

            <CheckBoxLabel id="categorias">Categorias</CheckBoxLabel>
            <div role="group">
              <CheckBox>
                <label>
                  <Field type="checkbox" name="categoria" value="software" />
                  Software
                </label>
                <label>
                  <Field type="checkbox" name="categoria" value="bebidas" />
                  Bebidas
                </label>
                <label>
                  <Field type="checkbox" name="categoria" value="comidas" />
                  Comidas
                </label>
                <label>
                  <Field type="checkbox" name="categoria" value="hardware" />
                  Hardware
                </label>
                <label>
                  <Field type="checkbox" name="categoria" value="eletronicos" />
                  Eletrônicos
                </label>
              </CheckBox>
            </div>

            <CustomInput label="Peso" name="peso" type="number" />
            <CustomInput
              label="Código de Barras"
              name="codigoBarras"
              type="number"
            />
            <CustomInput label="Valor (R$)" name="valor" type="number" />
            <CustomInput
              label="Data de Aquisição"
              name="dataAquisicao"
              type="date"
            />

            <Medidas>
              <div className="form-group">
                <label htmlFor="imagem">Carregar Imagem</label>
                <input
                  name="imagem"
                  type="file"
                  onChange={(event) => {
                    setFieldValue("file", event.currentTarget.files[0]);
                  }}
                  className="form-control"
                />
                <Thumb file={values.file} />
              </div>
            </Medidas>

            <Botoes>
              <div>
                <Button type="submit">Salvar</Button>
              </div>

              <div>
                <Button type="cancel">Cancelar</Button>
              </div>
            </Botoes>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default ProductForm;
