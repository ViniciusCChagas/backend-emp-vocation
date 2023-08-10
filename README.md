# EMP-VOCATION

Este software foi desenvolvido com base em um desafio técnico, a fim de testar os conhecimentos técnicos e resolução de problemas dos candidatos.

O EMP-VOCATION é um software de cadastro e gerenciamento de férias dos funcionários de uma empresa fictícia.

</br>
</br>

## Links Uteis

<li>Collection do Postman: <a href="https://github.com/ViniciusCChagas/backend-emp-vocation/blob/master/readme/emp-vocation.postman_collection.json" target="_blank">Link</a></li>

</br>
</br>

## Instruções para uso

#### ATENÇÃO: Este projeto depende do seu FrontEnd para funcionar corretamente!

Link do repositório do frontend: [https://github.com/ViniciusCChagas/frontend-emp-vocation](Repositório)

### 1. Clonar repositório

Você pode clonar esse repositório utilizando o comando: <br>

```bash
$ git clone https://github.com/ViniciusCChagas/backend-emp-vocation
```

ou você pode baixar o repositório como um arquivo .ZIP

### 2. Instalar as dependências

Após isso, na pasta do projeto rode o comando

```bash
$ npm install
#ou
$ yarn
```

para instalar todas as dependencias do projeto. <br>

### 3. Configurar as variaveis de ambiente

Depois de instalar todas as dependencias do projeto, devemos configurar as variaveis de ambiente:

Devemos criar um arquivo `.env` na raiz do projeto e então copiar o conteudo do arquivo `.env.example` para dentro, preenchendo os dados com as informações corretas.

```env
  PORT="3030"

  MONGODB_CONNECTION_STRING="<CONNECTION STRING DO MONDODB>"

  MONGODB_DATABASE="emp-vocation"

  MONGODB_EMPLOYEES_COLLECTION="employees"
  MONGODB_VOCATIONS_COLLECTION="vocations"
```

### 4. Rodar a aplicação

Depois configurar as variaveis de ambiente, vamos executa-lo em modo de desenvolvimento, utilizando o comando:

```bash
$ npm run dev
# ou
$ yarn dev
```

Após isso podemos acessar o App no endereço: [http://localhost:3000](http://localhost:3000) e conferir o resultado.

</br>
</br>

## Ferramentas utilizadas

<li>NodeJS</li>
<li>Express</li>
<li>Date-fns</li>
<li>Yup</li>
<li>MongoDB</li>
<li>TypeScript</li>
