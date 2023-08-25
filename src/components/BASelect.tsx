// type props = {
//     label: string,
//     options : any[]

// }



// export default function BASelect(props : type){
//     const {options , label , onchange } = props;
//   return (
//     <>
//     <p>{label</p>
//     <select>onchange={(e)}
//     {options.map(x , i) => (
//         <option value={x.value} > {x.display}</option>
//     )}
//     </select>
//     </>
//   )
// }
import React, { ChangeEvent } from 'react';

interface SelectProps {
  options: string[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;