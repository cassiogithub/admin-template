import Head from "next/head";
import router from "next/router";
import loading from "../../public/images/loading.gif";
import useAuth from "../data/hook/useAuth";
import Image from "next/image";
export default function forcarAutenticacao(jsx) {
  const { usuario, carregando } = useAuth();

  function renderizarConteudo() {
    <Head>
        <script dangerouslySetInnerHTML={{
            __html:`if(!document.cookie?.includes(admin-template-auth){
                window.location.href = "/autenticacao"
            })`
        }} />
    </Head>;
    return <>{jsx}</>;
  }
  function renderizarCarregando() {
    return (
      <div className={`flex justify-center items-center h-screen bg-gray-200`}>
        <Image src={loading} />
      </div>
    );
  }
  if (!carregando && usuario?.email) {
    return renderizarConteudo();
  } else if (carregando) {
    return renderizarCarregando();
  } else {
    router.push("/autenticacao");
    return null;
  }
}
