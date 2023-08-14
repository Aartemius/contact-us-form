"use client" 
import { CSSProperties, FC } from "react";
import { useScreenSize } from "@/app/utils/common";

interface FormInputProps {
  type?: string;
  label?: string;
  labelClass?: string;
  labelStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  inputClass?: string;
  register?: any;
  value?: string;
  error?: string | undefined;
  placeholder?: string;
}

const FormInput: FC<FormInputProps> = ({
  type,
  label,
  labelClass,
  labelStyle,
  inputStyle,
  inputClass,
  register,
  error,
  value,
  placeholder,
}: FormInputProps) => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <label
      className={ labelClass ? labelClass : 'block mb-2' }
      style={ {
        width: (isMobile || isTablet) ? '100%' : '40%',
        margin: (isMobile || isTablet) ? '0 0 2rem 0' : '0 5% 2rem 0',
        ...labelStyle
      } }
    >
      { label }
      <input
        type={ type }
        placeholder={ placeholder }
        style={ {
          outline: 'none',
          ...inputStyle
        } }
        value={ value }
        className={ inputClass ? inputClass : 'border-b border-black p-1 w-full' }
        { ...register }
      />
      { error && <span className="text-red-500">{ error }</span> }
    </label>
  );
}

export default FormInput;