interface AuthInputProps {
  label: string;
  valor: any;
  tipo?: "text" | "email" | "password";
  obrigatorio: boolean;
  naoRenderizarQuando?: boolean;
  valorMudou: (novoValor: any) => void;
}

export default function AuthInput(props) {
  return props.naoRenderizarQuando ? null : (
    <div className="flex flex-col mt-4">
      <label htmlFor="">{props.label}</label>
      <input
        type={props.tipo ?? "text"}
        name=""
        id=""
        value={props.valor}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        required={props.obrigatorio}
        className={`
        py-3 px-4 mt-2 rounded-lg
        bg-gray-200 
        border focus:border-blue-500 focus:outline-node focus:bg-white
        
      `}
      />
    </div>
  );
}
