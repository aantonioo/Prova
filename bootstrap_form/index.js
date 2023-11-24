
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

// Configuração do Handlebars como template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Pasta de arquivos estáticos (como CSS, JS, imagens)
app.use(express.static('public'));

// Rota principal
app.get('/', (req, res) => {
  res.render('formulario');
});

// Rota para exibir os produtos cadastrados
app.get('/meusprodutos', (req, res) => {
  // Aqui você buscaria os dados dos produtos e renderizaria a página de Meus Produtos
  const produtos = []; // Array vazio, substitua pelos dados reais dos produtos
  res.render('meusprodutos', { produtos });
});

// Rota para receber os dados do formulário
app.post('/cadastrarproduto', (req, res) => {
  // Aqui você receberia os dados do formulário e os salvaria (por exemplo, em um banco de dados)
  // Depois, redirecionaria para a página de Meus Produtos para exibir os dados cadastrados
  res.redirect('/meusprodutos');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
