/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import history from "history.js";

import { materialTheme } from "./materialTheme";
import GlobalStyles from "styles/GlobalStyles";
import Loader from "./components/Loader";
import Snackbar from "./components/Snackbar";
import DataInputForm from "./views/forms/DataInputForm";
import Busqueda from "./views/Inicio/Busqueda";
import Visualizador from "./views/Visualizador";
import Cambios from "./views/Cambios";

const App = () => {
    return (
        <ThemeProvider theme={materialTheme}>
            <GlobalStyles>
                <Snackbar>
                    <Router history={history}>
                        <Suspense fallback={<Loader />}>
                            <Switch>
                                <Route exact path="/ingresar" component={DataInputForm} />
                                <Route exact path="/actualizar/:objectID" component={DataInputForm} />
                                <Route exact path="/documento/:objectID" component={Visualizador} />
                                <Route exact path="/cambios/:objectID" component={Cambios} />
                                <Route exact path="/" component={Busqueda} />
                            </Switch>
                        </Suspense>
                    </Router>
                </Snackbar>
            </GlobalStyles>
        </ThemeProvider>
    );
};

export default App;
