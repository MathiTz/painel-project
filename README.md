<h1> Painel para criação de artigos e finalização do curso </h1>

<h2> Para iniciar o projeto entre nas duas pastas (Backend e Frontend) e rode o comando:</h2>
<p><strong>npm i</strong>, onde irá instalar as dependências.</p>

<h4>Para inicializar o backend:</h4> <p>rode <strong>npm start</strong>, crie um DB chamado <strong>"knowledge"</strong>,
*NOTE QUE USEI POSTGRESQL* e use o comando <strong>knex migrate:latest</strong> para rodar as migrations.</p>

<h4>Para inicializar o frontend:</h4> <p>rode apenas <strong>npm run serve.</strong></p>

## Para criar um usuário administrador e ter acesso a todas as ferramentas, faço uso do programa postman
onde poderá fazer uma requisição post para url <strong>http:localhost:3000/signup</strong> com os seguintes dados:
{
	"name": "User"
	"email": "user@gmail.com.br",
	"password": "12345"
	"confirmPasswor": "12345",
	"admin": true
}

<h2> Após isso, tudo deverá está dentro dos conformes para poder aproveitar todas as ferramentas </h2>
