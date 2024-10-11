// styles
import "./form.scss";

// types
import { ReactElement } from "react";
interface IFormProps {
  props: {
    title: string;
    input?: { label: string; type: string; placeholder?: string };
    inputs?: { label: string; type: string; placeholder?: string }[];
  };
}

export default function Form({ props }: IFormProps): ReactElement {
  const { title, input, inputs } = props;

  const isMultipleClass: string = inputs ? "form--multiple" : "form--single";

  return (
    <form id={"form"} className={isMultipleClass}>
      <h3>{title}</h3>
      {input && (
        <div className={"inputWrapper"}>
          <label htmlFor={input.label}>{input.label}</label>
          <input
            type={input.type}
            id={input.label}
            placeholder={input.placeholder}
          />
        </div>
      )}
      {inputs && (
        <>
          {inputs.map(
            (
              input: { label: string; type: string; placeholder?: string },
              index: number,
            ): ReactElement => (
              <div className={"inputWrapper"} key={index}>
                <label htmlFor={input.label}>{input.label}</label>
                <input
                  type={input.type}
                  id={input.label}
                  placeholder={input.placeholder}
                />
              </div>
            ),
          )}
        </>
      )}
    </form>
  );
}
