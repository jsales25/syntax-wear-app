// Importa o componente Outlet, que é onde as rotas "filhas" serão renderizadas,
// e a função createFileRoute, usada para criar uma rota baseada em arquivo.
import { Outlet, createFileRoute } from "@tanstack/react-router";

// Importa o componente Header (cabeçalho) da pasta de componentes.
import { Header } from "../../components/Header";

// Importa o componente Footer (rodapé) da pasta de componentes.
import { Footer } from "../../components/Footer";

// Cria a rota associada ao arquivo "/_app".
// Essa rota funciona como um layout “pai” para outras rotas.
// A propriedade `component` define qual componente React será renderizado
// sempre que essa rota estiver ativa (no caso, o AppLayout).
export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

// Define o componente de layout principal da aplicação.
// Ele será usado como “casca” (layout) em volta das páginas internas.
function AppLayout() {
  return (
    <div>
      <Header />

      {/* Outlet é o espaço onde as rotas filhas serão renderizadas.
          Ou seja, cada página específica entra aqui dentro. */}
      <Outlet />

      <Footer />
    </div>
  );
}
