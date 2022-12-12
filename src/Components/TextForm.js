import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleRemoveExtraSpaces = () => {
    let removeExtraSpaces = text.split(/[ ]+/);
    setText(removeExtraSpaces.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  return (
    <div
      className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
    >
      <h1 className="my-3">{props.title}</h1>
      <div className="mb-3">
        <textarea
          className={`form-control text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          id="myBox"
          style={{
            backgroundColor: props.mode === "dark" ? "#0c4343" : "white",
          }}
          rows="8"
          value={text}
          onChange={handleText}
        ></textarea>
      </div>
      <div>
        <button
          type="button"
          disabled={text.length === 0}
          className="btn btn-dark mx-1"
          onClick={handleUpClick}
        >
          To Uppercase
        </button>
        <button
          type="button"
          disabled={text.length === 0}
          className="btn btn-dark mx-1"
          onClick={handleLoClick}
        >
          To Lowercase
        </button>
        <button
          type="button"
          disabled={text.length === 0}
          className="btn btn-dark mx-1"
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
        <button
          type="button"
          disabled={text.length === 0}
          className="btn btn-dark mx-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          type="button"
          disabled={text.length === 0}
          className="btn btn-dark mx-1"
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div>
        <h2 className="mt-3">Text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters
        </p>
      </div>
      <div>
        <h2 className="mt-3">Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </div>
  );
}

export default TextForm;
