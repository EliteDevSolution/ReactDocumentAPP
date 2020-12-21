import {useHistory, useParams} from "react-router-dom";
import {Button, Card, MenuItem, TextField} from "@material-ui/core";
import ReactDiffViewer from 'react-diff-viewer'
import React, {useState} from "react";
import {getAllDocuments} from "../services/document";

const Cambios = () => {
  const {objectID} = useParams();
  const history = useHistory();
  const [documents, setDocuments] = useState([]);

  const [oldDocument, setOldDocument] = useState('')
  const [newDocument, setNewDocument] = useState('')

  React.useEffect(() => {
    getAllDocuments(objectID).then(data => {
      data.sort(compare)
      setDocuments(data);
      setOldDocument(data[1].document)
      setNewDocument(data[0].document)
    })
  }, [objectID]);

  const handleChangeOldVersion = (value) => {
    setOldDocument(value.target.value);
  }

  const handleChangeNewVersion = (value) => {
    setNewDocument(value.target.value);
  }

  const handlePressBack = () => {
    history.push(`/actualizar/${objectID}`);
  }

  const formatDate = (dateTime) => {
    const date = new Date(dateTime);
    let minutes = ('0' + date.getUTCMinutes())
    let seconds = ('0' + date.getSeconds())
    minutes = minutes.slice(minutes.length - 2, 3)
    seconds = seconds.slice(seconds.length - 2, 3)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${minutes}:${seconds}`
  }

  const compare = (a, b) => {
    if (a.createdDate < b.createdDate) {
      return 1;
    }
    if (a.createdDate > b.createdDate) {
      return -1;
    }
    return 0;
  }

  return (
    <Card className="p-6 m-4">
      <Button
        className="mb-4 rounded"
        color="primary"
        variant="contained"
        type="submit"
        onClick={handlePressBack}
      >
        Volver
      </Button>

      <div className="flex flex-row justify-between mb-4">
        <TextField
          className="ml-4 mr-4"
          label="Vieja versión"
          name="oldVersion"
          variant="outlined"
          size="small"
          fullWidth
          value={oldDocument}
          onChange={handleChangeOldVersion}
          select
        >
          {documents.map((item, id) => (
            <MenuItem key={id} value={item.document}>
              {formatDate(item.createdDate)}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          className="ml-4 mr-4"
          label="Nueva versión"
          name="newVersion"
          variant="outlined"
          size="small"
          fullWidth
          value={newDocument}
          onChange={handleChangeNewVersion}
          select
        >
          {documents.map((item, id) => (
            <MenuItem key={id} value={item.document}>
              {formatDate(item.createdDate)}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <ReactDiffViewer
        oldValue={oldDocument}
        newValue={newDocument}
        splitView={true}
      />
    </Card>
  )

}

export default Cambios
