import React from "react";
import {useParams, useHistory } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import {firebaseApp} from "../services/firebase/firebase";
import "regenerator-runtime/runtime.js";
import {Button} from "@material-ui/core";

function Visualizador() {
  const [texto, setTexto] = React.useState([]);
  const history = useHistory();

  const {objectID} = useParams();

  React.useEffect(() => {
    firebaseApp
      .firestore()
      .collection("documents")
      .doc(objectID)
      .get()
      .then((doc) => {
        setTexto(doc.data() || {});
      });
  }, [objectID]);

  const handlePressEdit = () => {
    history.push("/ingresar");
  };

  return (
    <div>
      <h1> {texto.titulo} </h1>
      <Button
        className="mb-4 rounded"
        color="primary"
        variant="contained"
        type="submit"
        onClick={handlePressEdit}
      >
        Editar documento
      </Button>
      <h2>
        Institución: <span/> {texto.institución}
      </h2>
      <p> Tipo de Norma: {texto.tipo_de_norma}</p>
      <p> Número: {texto.numero1}</p>
      <p> Fecha de Firma {texto.firma}</p>
      <p> Fuente: {texto.fuente}</p>
      <p> {texto.numero2}</p>
      <p> Fecha de Publicación: {texto.fecha}</p>
      <div> {ReactHtmlParser(texto.document)}</div>
    </div>
  );
}

export default Visualizador;
