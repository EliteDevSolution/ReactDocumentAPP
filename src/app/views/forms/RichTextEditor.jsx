import React, {useEffect, useRef} from "react";
import {Jodit} from "jodit";
import "jodit/build/jodit.min.css";

const RichTextEditor = ({values, setFieldValue, field, toolbar = true, limit = false}) => {
  const textArea = useRef(null);
  const config = {
    readonly: false,
    toolbar,
    limitChars: limit,
    minHeight: 'auto',
  };

  useEffect(() => {
    const element = textArea.current;
    textArea.current = Jodit.make(element, config);
    textArea.current.workplace.tabIndex = 1;

    textArea.current.events.on("change", (value) =>
      setFieldValue(field, value)
    );

    return () => {
      if (textArea.current) textArea.current.destruct();
      textArea.current = element;
    };
  }, [setFieldValue]);

  useEffect(() => {
    if (values === "") textArea.current.value = values;
  }, [values]);

  return (
    <div>
      <textarea
        ref={textArea}
        value={values || ""}
        onChange={() => {
        }}
      />
    </div>
  );
};

export default RichTextEditor;
