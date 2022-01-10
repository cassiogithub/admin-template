import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes(){
  const {  alternarTema} = useAppData()
    return (
      <Layout titulo='Notificações' subtitulo='Gerenciamento de notificações'> 
      </Layout>
    )
}