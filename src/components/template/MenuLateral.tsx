import useAuth from "../../data/hook/useAuth";
import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  const {logout} = useAuth();

  return (
    <aside className={`
      flex flex-col
      
      bg-gray-200 text-gray-700
      dark:bg-gray-900 dark:text-gray-200
    `}>
      <div className={`
      flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-500
        h-20 w-20
      `}>
        <Logo />
      </div>
     <ul className={`flex-grow`}>
        <MenuItem url="/" icone={IconeCasa} texto="Início" />
        <MenuItem url="/ajustes" icone={IconeAjustes} texto="Ajustes" />
        <MenuItem url="/notificacoes" icone={IconeSino} texto="Notificações" />
      </ul>
      <ul className={''}>
        <MenuItem 
        url="/notificacoes" icone={IconeSair} texto="Sair" 
        onClick={logout} 
        className="text-red-600 hover:bg-red-400 hover:text-white dark:text-red-200 "/>
      </ul>
    </aside>
  );
}
