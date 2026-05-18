# DESAFIO TECNICO VR

MFE Store VR
Microfrontend desenvolvido com React, Vite e Module Federation.

📦 Estrutura do Projeto
O projeto é dividido em 4 aplicações:
•	host → aplicação principal 
•	header → cabeçalho e carrinho 
•	cards → listagem de produtos 
•	footer → rodapé 

🚀 Tecnologias utilizadas
•	React 
•	Vite 
•	Module Federation 
•	TailwindCSS 
•	Axios 
•	React Router DOM 
•	Lucide React 

▶️ Como rodar o projeto
Clone o repositório:
git clone https://github.com/alinesobrinho/mfe-store.git
Entre na pasta do projeto:
cd mfe-store

📥 Instalação das dependências
Instale as dependências em cada microfrontend.
Host
cd host
npm install
Header
cd ../header
npm install
Cards
cd ../cards
npm install
Footer
cd ../footer
npm install

▶️ Rodando os microfrontends
Abra um terminal para cada aplicação.
Host
cd host
npm run build
npm run preview -- --port 4173
Footer
cd footer
npm run build
npm run preview -- --port 4174
Cards
cd cards
npm run build
npm run preview -- --port 4175
Header
cd header
npm run build
npm run preview -- --port 4176

🌐 Aplicação
Após iniciar todos os microfrontends, acesse:
http://localhost:4173

🧪 Testes
O projeto utiliza Vitest para execução de testes automatizados.
Para executar os testes, acesse a pasta do host:
cd host
Execute:
npm run test
O comando executa os testes configurados no projeto e valida se a aplicação está funcionando corretamente.
Caso os testes estejam corretos, o terminal exibirá uma mensagem semelhante a:
Tests passed

✅ Funcionalidades
•	Listagem de produtos 
•	Carrinho de compras 
•	Adição de produtos 
•	Remoção de produtos 
•	Contador de itens 
•	Total da compra 
•	Finalização de compra 
•	Login estilizado 
•	Arquitetura microfrontend com Module Federation 

👩‍💻 Desenvolvido por
Aline Sobrinho

