import { CommonProps } from "../../type/type";

type HeaderProps = {
  title: string;
} & CommonProps;

const Header = ({ title, children }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold">{title}</h1>
      {children}
    </div>
  );
};

export default Header;
