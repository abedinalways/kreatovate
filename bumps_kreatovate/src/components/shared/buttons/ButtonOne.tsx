import { Button } from "@/components/ui/button";

const ButtonOne = ({ btnText }) => {
  return (
    <div className="btnOne-text-gradient p-px rounded-xl">
      <Button
        variant="outline"
        className="py-2.5 px-4 rounded-[1px] font-roboto font-normal text-lg capitalize bg-transparent"
      >
        {btnText}
      </Button>
    </div>
  );
};

export default ButtonOne;
