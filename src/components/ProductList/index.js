import React from "react";
import { MdAddCircle, MdEdit, MdDelete } from "react-icons/md";
import { format, parseISO } from "date-fns";

import {
  Container,
  Header,
  IconButton,
  Table,
  ActionsColumn,
  ActionsRow,
} from "./styles";

function ProductList({ data, handleCreate, handleUpdate, handleDelete }) {
  return (
    <Container>
      <Header>
        <h1>Produtos</h1>
        <IconButton type="button" onClick={() => handleCreate()}>
          <MdAddCircle size={20} color="#222" />
        </IconButton>
      </Header>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Código de Barras</th>
            <th>Valor</th>
            <th>Data de Aquisição</th>
            <ActionsColumn />
          </tr>
        </thead>
        <tbody>
          {data.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>{produto.codigoBarras}</td>
              <td>{produto.valor}</td>
              <td>{format(parseISO(produto.dataAquisicao), "dd/MM/yyyy")}</td>
              <ActionsRow>
                <IconButton type="button" onClick={() => handleUpdate(produto)}>
                  <MdEdit size={20} color="#222" />
                </IconButton>
                <IconButton
                  type="button"
                  onClick={() => handleDelete(produto.id)}
                >
                  <MdDelete size={20} color="#222" />
                </IconButton>
              </ActionsRow>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ProductList;
