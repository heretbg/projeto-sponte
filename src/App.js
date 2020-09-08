import React from "react";
import { Estilos } from "./Estilos";
import Form from "./Pages/Form/Index";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Estilos>
        {/* <Route exact path="/" component={List} /> */}
        <Route path="/produtos" component={Form} />
      </Estilos>
    </Switch>
  );
}

export default App;
