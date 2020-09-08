import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Projeto CRUD de Produtos - Andrey Galeazzi</h1>
      <p>
        <Link to="produtos">&gt;&gt; Produtos</Link>
      </p>
    </div>
  );
}

export { Home };
