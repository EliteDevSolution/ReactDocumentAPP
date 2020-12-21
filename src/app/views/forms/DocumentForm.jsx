import {Button, Card, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, TextField} from "@material-ui/core";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {es} from "date-fns/locale";
import RichTextEditor from "./RichTextEditor";
import DocUploader from "./DocUploader";
import LoadingButton from "../../components/LoadingButton";
import React from "react";
import {Formik} from "formik";
import * as yup from "yup";
import {insertDataInFirebase} from "../../services/firebase/firebaseUserService";
import {useSnackbar} from "notistack";
import {setHistory, updateDocument} from "../../services/document";
import {useHistory} from "react-router-dom";

const DocumentForm = ({data, objectID}) => {
  const {enqueueSnackbar: snackbar} = useSnackbar();
  const history = useHistory();
  const oldData = data;

  const handleFormSubmit = async (values, {setSubmitting, resetForm}) => {
    try {
      if (!!objectID) {
        updateDocument(objectID, values);
        if (oldData.document != values.document) setHistory(objectID, values);
        return snackbar("Documento actualizado correctamente", {variant: "success"});
      }

      await insertDataInFirebase(values);

      snackbar("Documento guardado correctamente", {variant: "success"});
      resetForm();
    } catch (error) {
      snackbar("No se pudo guardar el documento", {variant: "error"});
    }
  };

  const redirectToHistory = () => {
    history.push(`/cambios/${objectID}`);
  };

  return (
    <Formik
      initialValues={data}
      enableReinitialize
      validationSchema={formSchema}
      onSubmit={handleFormSubmit}>
      {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => (
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center max-w-600 mx-auto mb-6">
            <TextField
              label="Titulo"
              name="titulo"
              variant="outlined"
              size="small"
              fullWidth
              value={values.titulo || ""}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.titulo && errors.titulo)}
              helperText={touched.titulo && errors.titulo}
            />
          </div>

          <div className="flex justify-center max-w-900 mx-auto mb-6">
            <TextField
              className="mr-4"
              label="Tipo de Norma"
              name="tipo_de_norma"
              variant="outlined"
              size="small"
              fullWidth
              value={values.tipo_de_norma || ""}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.tipo_de_norma && errors.tipo_de_norma)}
              helperText={touched.tipo_de_norma && errors.tipo_de_norma}
              select
            >
              {tipo_de_norma_list.map((item, ind) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              className="mr-4"
              label="Estado"
              name="estado"
              variant="outlined"
              size="small"
              fullWidth
              value={values.estado || ""}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.estado && errors.estado)}
              helperText={touched.estado && errors.estado}
              select
            >
              {estado_list.map((item, ind) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              className="mr-4"
              label="Institución"
              name="institución"
              variant="outlined"
              size="small"
              fullWidth
              value={values.institución || ""}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.institución && errors.institución)}
              helperText={touched.institución && errors.institución}
            />

            <TextField
              label="Numero"
              name="numero1"
              variant="outlined"
              size="small"
              fullWidth
              value={values.numero1 || ""}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.numero1 && errors.numero1)}
              helperText={touched.numero1 && errors.numero1}
            />
          </div>

          <div className="flex justify-center max-w-900 mx-auto mb-8">
            <TextField
              className="mr-4"
              label="Fuente"
              name="fuente"
              variant="outlined"
              size="small"
              fullWidth
              value={values.fuente || ""}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.fuente && errors.fuente)}
              helperText={touched.fuente && errors.fuente}
              select
            >
              {fuenteList.map((item, ind) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              className="mr-4"
              label="Numero"
              name="numero2"
              variant="outlined"
              size="small"
              type="number"
              fullWidth
              value={values.numero2 || ""}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.numero2 && errors.numero2)}
              helperText={touched.numero2 && errors.numero2}
            />

            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}>
              <KeyboardDatePicker
                className="mr-4"
                label="Firma"
                variant="outlined"
                size="small"
                fullWidth
                value={values.firma || ""}
                margin="none"
                inputVariant="outlined"
                autoOk={true}
                type="text"
                format="MMMM dd, yyyy"
                onChange={(date) => setFieldValue("firma", date.toString())}
              />
            </MuiPickersUtilsProvider>

            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}>
              <KeyboardDatePicker
                margin="none"
                label="Fecha"
                inputVariant="outlined"
                type="text"
                size="small"
                autoOk={true}
                fullWidth
                value={values.fecha}
                format="MMMM dd, yyyy"
                onChange={(date) => setFieldValue("fecha", date.toString())}
              />
            </MuiPickersUtilsProvider>
          </div>

          <div className="max-w-200 mx-auto my-5">
            <FormControl className="w-full" component="fieldset">
              <RadioGroup
                className="justify-between"
                row
                name="docType"
                value={values.docType}
                onChange={handleChange}
              >
                <FormControlLabel
                  className="h-20 mr-6"
                  label="Texto"
                  value="text"
                  control={<Radio size="small" color="secondary"/>}
                />
                <FormControlLabel
                  className="h-20"
                  label="PDF"
                  value="pdf"
                  control={<Radio size="small" color="secondary"/>}
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div className="text-center">
            <LoadingButton
              className="mb-4 px-14 rounded"
              color="secondary"
              variant="contained"
              type="submit"
              isSubmitting={isSubmitting}
            >
              Guardar
            </LoadingButton>

            <Button
              className="mb-4 px-14 rounded ml-4"
              color="secondary"
              variant="contained"
              onClick={redirectToHistory}
            >
              Ver historial
            </Button>
          </div>

          <h5>Descripción (150 caracteres máximo)</h5>

          <div className="mb-5">
            <RichTextEditor
              values={values.description}
              toolbar={false}
              field={"description"}
              touched={touched}
              limit={150}
              errors={errors}
              setFieldValue={setFieldValue}
            />
          </div>

          <h5>Consideraciones (sin limite)</h5>

          <div className="mb-5">
            <RichTextEditor
              values={values.consideraciones}
              toolbar={false}
              field={"consideraciones"}
              touched={touched}
              errors={errors}
              setFieldValue={setFieldValue}
            />
          </div>

          {values.docType === "text" ? (
            <>
              <h5>Documento (sin limite)</h5>
              <RichTextEditor
                values={values.document}
                field={"document"}
                touched={touched}
                errors={errors}
                setFieldValue={setFieldValue}
              />
            </>
          ) : (
            <DocUploader values={values} setFieldValue={setFieldValue}/>
          )}
        </form>
      )}
    </Formik>
  )
}

const fuenteList = [
  "Registro Oficial",
  "Suplemento",
  "Edición Especial",
  "Edición Constitucional",
];

const tipo_de_norma_list = [
  "Acuerdo",
  "Acuerdo Ministerial",
  "Convenio",
  "Decreto Ejecutivo",
  "Ley",
  "Código",
  "Ordenanza",
  "Resolución",
  "Resolución Ministerial",
];

const estado_list = [
  "Vigente",
  "Derogado"
];

const formSchema = yup.object().shape({
  titulo: yup.string().required("obligatorio"),
  tipo_de_norma: yup.string().required("obligatorio"),
  institución: yup.string().required("obligatorio"),
});

export default DocumentForm;
