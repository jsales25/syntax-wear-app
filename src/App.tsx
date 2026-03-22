// --- Configuração do Roteador (Não utilizada neste arquivo) ---
// As linhas abaixo preparam o sistema de rotas, mas o roteador não é ativado aqui.
// A ativação provavelmente acontece em `src/main.tsx`.

// Importa as funções necessárias da biblioteca de roteamento TanStack Router.
import { RouterProvider, createRouter } from "@tanstack/react-router";
// Importa a "árvore de rotas", um arquivo gerado automaticamente que lista todas as páginas do app.
import { routeTree } from "./router-tree-gen";
import { CartProvider } from "./contexts/CartProvider";

// Cria a instância do roteador, passando a lista de todas as rotas disponíveis.
const router = createRouter({ routeTree });

// Bloco de declaração de tipos para o TypeScript.
// Isso ajuda o editor de código a entender o nosso roteador, oferecendo
// sugestões melhores e verificação de erros (type safety).
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// --- Componente Principal da Página ---
// Este componente `App` monta a estrutura da página principal (homepage).
function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

// Exporta o componente `App` para que ele possa ser usado em outras partes do projeto.
export default App;
