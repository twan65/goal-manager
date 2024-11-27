import { CommonProps } from "../../type/type";

const Main = ({ children }: CommonProps) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      {children}
    </div>
  );
};

export default Main;
