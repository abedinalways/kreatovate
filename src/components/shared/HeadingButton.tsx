import { Button } from "../ui/button";

type Btn = {
  btnText?: string;
};

const HeadingButton = ({ btnText }: Btn) => {
  return (
    <Button
      variant="default"
      className="px-7 py-0.5 capitalize btn-gradient text-xs leading-8 rounded-full heading-btn-bg"
    >
      {btnText}
    </Button>
  );
};

export default HeadingButton;
