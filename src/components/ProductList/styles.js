import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconButton = styled.button`
  background: none;
  border: 0;
  padding: 6px;
  margin: 0 6px;

  span {
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const Table = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
`;

export const ActionsColumn = styled.th`
  width: 120px;
`;

export const ActionsRow = styled.td`
  text-align: center;
`;
