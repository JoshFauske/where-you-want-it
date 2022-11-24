import React, { useState } from "react";
import Alert from "./Alert";
import MovingForm from "./MovingForm";
import StorageForm from "./StorageForm";

type QuoteFormProps = {};

const QuoteForm = ({}: QuoteFormProps) => {
  const [formError, setFormError] = useState<boolean>(false);
  const [formSuccess, setFormSuccess] = useState<boolean>(false);
  const [storageForm, showStorageForm] = useState<boolean>(false);

  return (
    <div id="quoteForm" className="w-full">
      {formSuccess && (
        <Alert
          type="success"
          msg="Success! Your quote has been recieved. Please check your email for confirmation."
        />
      )}
      {formError && (
        <Alert
          type="error"
          msg="Error! Something went wrong, please try again."
        />
      )}
      <div className="flex justify-center mb-5">
        <button
          className={`mr-3 ${
            !storageForm && "border-b-2 border-primaryColor font-bold"
          }`}
          onClick={() => {
            showStorageForm(false);
          }}
        >
          Moving
        </button>
        <button
          className={`${
            storageForm && "border-b-2 border-primaryColor font-bold"
          }`}
          onClick={() => {
            showStorageForm(true);
          }}
        >
          Storage
        </button>
      </div>
      {storageForm ? (
        <StorageForm
          setFormError={setFormError}
          setFormSuccess={setFormSuccess}
        />
      ) : (
        <MovingForm
          setFormError={setFormError}
          setFormSuccess={setFormSuccess}
        />
      )}
    </div>
  );
};

export default QuoteForm;
