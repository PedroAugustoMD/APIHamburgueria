# APIHamburgueria
API De uma hamburgueria utilizando nodeJS, Typescript e Prisma

### Como rodar
1. Clone o repositório:
```console
https://github.com/PedroAugustoMD/APIHamburgueria.git
```

2. Crie um arquivo .env na pasta do seu projeto e defina o DATABASEURL da seguinte forma:
```console
DATABASE_URL="file:./dev.db"
```

3. Execute os seguintes comandos para iniciar o projeto:
```console
npm install
```
```console
npx prisma generate
```
```console
npx prisma migrate dev
```
```console
npm run dev
```
4. Utilize o insomnia para simular as requisições

### Cliente
* http://localhost:3000/cliente/create (POST)
* http://localhost:3000/cliente/list (GET)
* http://localhost:3000/cliente/find/:email (GET)
* http://localhost:3000/cliente/delete/:email (DELETE)
* http://localhost:3000/cliente/update/:email (PUT)

### body:
Para criar um cliente.
```json
{
    "nome": "", 
    "email": "", 
    "senha": "", 
    "telefone": ""
}
```
--

Para atualizar um cliente.
```json
{
    "nome": "", 
    "senha": "", 
    "telefone": ""
}
```
### Autenticação:
* http://localhost:3000/autenticacao/login (POST)

### body:

```json
{ 
    "email": "", 
    "senha": "", 

}
```
Ao autenticar ou criar um cliente você receberá um tolken que será passado no Header para as operações relacionadas a prato e pedido:
Authorization = Bearer Token

### Prato

* http://localhost:3000/prato/create (POST)
* http://localhost:3000/prato/list (GET)
* http://localhost:3000/prato/find/:nome (GET)
* http://localhost:3000/prato/delete/:nome (DELETE)
* http://localhost:3000/prato/update/:nome (PUT)

### body:
Para criar um prato.
```json
{
    "nome": "", 
    "ingredientes": "", 
    "valor":  
}
```
--

Para atualizar um prato.
```json
{
    "nome": "", 
    "senha": "", 
    "telefone": ""
}
```
Todas as operações necessitam do token no header:
Authorization = Bearer 

### Pedido

* http://localhost:3000/pedido/create (POST)
* http://localhost:3000/pedido/list (GET)
* http://localhost:3000/pedido/find/:clienteEmail (GET)
* http://localhost:3000/pedido/delete/:id (DELETE)
* http://localhost:3000/pedido/update/:id (PUT)

### body:
Para criar e atualizar um pedido.
```json
{
    "clienteEmail": "", 
    "total":  
}
```

Todas as operações necessitam do token no header:
Authorization = Bearer Token
