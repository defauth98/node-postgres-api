<h1 align="center">node-postgres-api</h1>

Projeto usado para estudar o driver nativo do PostgresSQL com NodeJS

### :station: Rotas

**Dono:**

- POST **/owner** - Registra um novo dono
- PUT **/owner/:id** - Edita um dono
- DELETE **/owner/:id** - Deleta um dono
- GET **/owner** - Lista todos os donos

**Empresa:**

- POST **/enterprise** - Registra uma nova empresa
- PUT **/enterprise/:id** - Edita uma empresa
- DELETE **/enterprise/:id** - Deleta uma empresa
- GET **/enterprise** - Lista todos as empresas

**Cidade:**

- POST **/city** - Registra uma nova cidade
- PUT **/city/:id** - Edita uma cidade
- DELETE **/city/:id** - Deleta uma cidade
- GET **/city** - Lista todos as cidades

**Funcionário:**

- POST **/worker** - Registra um novo funcionário
- PUT **/worker/:id** - Edita um funcionário
- DELETE **/worker/:id** - Deleta um funcionário
- GET **/worker** - Lista todos os funcionários

### :computer: Tecnologias

Esse projeto foi desenvolvido com as seguintes técnologias:

- [Node.js][nodejs]
- [Postgres][postgres]

[nodejs]: https://nodejs.org/
[postgres]: https://www.postgresql.org/

### :rocket: Como rodar o projeto

```sh
# Clone o projeto via http
git clone https://github.com/defauth98/node-postgres-api.git

# Entrar na pasta do projeto backend
cd node-postgres-api

### Instalar as depedencias usando yarn
npm i

### Rodar o projeto
npm run dev

```

### :bust_in_silhouette: Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/defauth98">
        <img src="https://avatars.githubusercontent.com/u/52966246?v=4" width="100px;" alt=""/>
        <br />
          <sub>
            <b>Daniel Ribeiro</b>
          </sub>
      </a>
    </td>
  </tr>
</table>
