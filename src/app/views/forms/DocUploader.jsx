import { Button, Icon } from "@material-ui/core";
import React from "react";

const DocUploader = ({ values, setFieldValue }) => {
  const handleFileSelct = async ({ target: { files } }) => {
    setFieldValue("file", files[0]);
  };

  return (
    <div className="text-center">
      <div className="flex justify-center">
        <input
          className="hidden"
          id="doc"
          name="file"
          type="file"
          accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf"
          onChange={handleFileSelct}
        />
        <label htmlFor="doc">
          <Button
            className="flex items-center"
            variant="contained"
            color="primary"
            component="span"
            type="button"
          >
            <Icon fontSize="small">file_copy</Icon>
            <div className="uppercase ml-2">Upload PDF</div>
          </Button>
        </label>
      </div>
      {values.file && <p className="text-muted mb-0">{values.file?.name}</p>}
    </div>
  );
};

export default DocUploader;
