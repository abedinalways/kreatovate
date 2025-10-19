import React from "react";
import { Button } from "../ui/button";

type Btn = {
  btnText?: string;
};

const ButtonAll = ({ btnText }: Btn) => {
  return (
    <Button
      variant="default"
      className="px-6 py-3.5 capitalize btn-gradient text-lg lg:text-sm font-medium leading-8 h-10 rounded-xl"
    >
      {btnText}
    </Button>
  );
};

export default ButtonAll;
