import { Label } from "../../atoms/Label";

type FormFieldProps = {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
};

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  required = false,
  children,
}) => {
  return (
    <div className="space-y-1">
      <Label required={required}>{label}</Label>
      {children}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
