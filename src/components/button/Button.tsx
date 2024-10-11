// styles
import "./button.scss";

// types
import { ReactElement } from "react";

interface IButtonProps {
  props: {
    style: "blue" | "white" | "grey" | "green" | "red";
    text: string;
    onClick: (
      text?: string,
      url?: string,
    ) => void | ReactElement | Window | null;
  };
}

export default function Button({ props }: IButtonProps): ReactElement | null {
  const { style, text, onClick } = props;

  const handleClick: () => void = (): void => {
    onClick(text);
  };

  const className = `${style}Button`;

  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}
