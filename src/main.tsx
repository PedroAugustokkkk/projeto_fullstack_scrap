// Importa a função `createRoot` da biblioteca 'react-dom/client'.
// Esta função é usada para criar um ponto de entrada para a renderização de um aplicativo React no DOM.
import { createRoot } from 'react-dom/client';

// Importa o componente principal do aplicativo, chamado `App`, do arquivo './App.tsx'.
import App from './App.tsx';

// Importa o arquivo de estilos CSS './index.css'.
// Estes estilos serão aplicados globalmente ao aplicativo.
import './index.css';

// A função `createRoot` é chamada com o elemento do DOM que tem o id "root" como argumento.
// O operador "!" é uma asserção de não nulidade do TypeScript, garantindo que o elemento existe.
// O método `render` é então chamado no root criado para renderizar o componente `<App />` dentro do elemento "root".
createRoot(document.getElementById("root")!).render(<App />);