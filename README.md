<h1>Projeto de Desenvolvimento: Web</n>
Scraping de Notícias do Agronegócio</h1></n>
<h3>Objetivo</h3>
<p>O objetivo deste projeto é criar um sistema de web scraping com Node.js para capturar
notícias relacionadas ao agronegócio de sites específicos. As notícias serão
pré-processadas e armazenadas em um banco de dados não relacional, que será acessado
por meio de uma API em Node.js. A API será consumida por uma aplicação web em React.<p>
<h2>Tecnologias Utilizadas</h2>
Node.js<br>
Cheerio<br>
axios<br>
MongoDB (Banco de Dados Não Relacional)<br>
React<br>
<h2>Fluxo do Sistema</h2>
O sistema fará a captura das notícias de sites selecionados usando técnicas de web
scraping com Node.js.
As notícias serão pré-processadas e armazenadas em um banco de dados MongoDB.
A API em Node.js será responsável por expor as notícias armazenadas no banco de dados
em formato JSON.
A aplicação em React consumirá a API e exibirá as notícias em um formato amigável ao
usuário.
<h2>Arquitetura do Sistema</h2>
<h3>Web Scraping</h3>
<p>O web scraping será implementado usando a biblioteca Cheerio, que permite analisar e
manipular documentos HTML usando a sintaxe do jQuery. Serão criados scripts para cada
site selecionado, que farão a captura das notícias e o pré-processamento das mesmas.</p>
<h3>Banco de Dados</h3>
<p>O MongoDB será utilizado como banco de dados não relacional para armazenar as notícias
pré-processadas. Será criada uma coleção para armazenar as notícias, com campos como
título, conteúdo, data e fonte.<p>
<h3>API em Node.js</h3>
<p>A API em Node.js será implementada usando a biblioteca Express.js. Serão criadas rotas
para retornar as notícias armazenadas no banco de dados. A API também será responsável
por lidar com requisições concorrentes e garantir a segurança do sistema.</p>
<h3>Aplicação em React</h3>
<p>A aplicação em React será responsável por consumir a API em Node.js e exibir as notícias
em um formato amigável ao usuário. Serão utilizadas bibliotecas como Axios para consumir
a API e Material UI para estilizar a aplicação.</p>
