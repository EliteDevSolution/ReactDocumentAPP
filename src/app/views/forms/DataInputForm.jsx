import React, {useEffect, useState} from "react";
import {Card} from "@material-ui/core";
import {getDocument} from "../../services/document";
import {useParams} from "react-router-dom";
import DocumentForm from "./DocumentForm";
import Loader from "../../components/Loader";

const DataInputForm = () => {
  const {objectID} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [initialValue, setInitialValue] = useState({
    titulo: "",
    tipo_de_norma: "",
    institución: "",
    estado: "",
    numero1: "",
    numero2: "",
    fuente: "",
    document: "",
    fecha: new Date().toString(),
    firma: new Date().toString(),
    docType: "text"
  })

  const loadDocument = () => {
    getDocument(objectID).then(resp => {
      resp.docType = 'text';
      setInitialValue(resp)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    if (!!objectID) return loadDocument();
    setIsLoading(false)
  }, [])

  return (
    !isLoading
      ? (
        <Card className="p-6 m-4">
          <DocumentForm data={initialValue} objectID={objectID}/>
        </Card>)
      : <Loader/>
  );
}

export default DataInputForm;
