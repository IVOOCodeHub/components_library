// styles
import "./form.scss";

// types
import {
  ReactElement,
  FormEvent,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from "react";
interface IFormProps<T> {
  props: {
    title: string;
    input?: { label: string; key: string; type: string; placeholder?: string };
    inputs?: {
      label: string;
      key: string;
      type: string;
      placeholder?: string;
    }[];
    isWithSubmitButton?: boolean;
    formData?: T;
    setFormData?: Dispatch<SetStateAction<T>>;
  };
}

// hooks | libraries
import { useState } from "react";

// components
import Button from "../button/Button";

export default function Form<T>({ props }: IFormProps<T>): ReactElement {
  const { title, input, inputs, isWithSubmitButton, setFormData } = props;
  const [localFormData, setLocalFormData] = useState<T>({} as T);

  const isMultipleClass: string = inputs ? "form--multiple" : "form--single";

  const handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void = (
    e: ChangeEvent<HTMLInputElement>,
  ): void => {
    const { id, value } = e.target;
    setLocalFormData(
      (prevData: T): T => ({
        ...prevData,
        [id]: value as unknown as T[keyof T],
      }),
    );
  };

  const handleSubmit: (e: FormEvent) => void = (e: FormEvent): void => {
    e.preventDefault();
    console.log("formData =>", localFormData);
    if (setFormData) setFormData!(localFormData);
  };

  return (
    <form id={"form"} className={isMultipleClass} onSubmit={handleSubmit}>
      <h3>{title}</h3>
      {input && (
        <div className={"inputWrapper"}>
          <label htmlFor={input.key}>{input.label}</label>
          <input
            type={input.type}
            id={input.key}
            placeholder={input.placeholder}
            onChange={handleInputChange}
          />
        </div>
      )}
      {inputs && (
        <>
          {inputs.map(
            (
              input: { label: string; key: string; type: string; placeholder?: string },
              index: number,
            ): ReactElement => (
              <div className={"inputWrapper"} key={index}>
                <label htmlFor={input.key}>{input.label}</label>
                <input
                  type={input.type}
                  id={input.key}
                  placeholder={input.placeholder}
                  onChange={handleInputChange}
                />
              </div>
            ),
          )}
        </>
      )}
      {isWithSubmitButton && (
        <div className={"buttonWrapper"}>
          <Button
            props={{
              style: "blue",
              text: "Connexion",
              type: "submit",
            }}
          />
        </div>
      )}
    </form>
  );
}
