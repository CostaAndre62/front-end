# Comandos e etapas para uso do Node.js e do json-server (API local para testes)

## Requisitos iniciais
-   Node.js instalado
-   Arquivo dados.json colocado na pasta do projeto

## Comandos para usar a API
1.  Acessar Node.js command prompt
2.  Instalar o pacote json-server: npm install -g json-server (basta fazer isso uma vez)
3.  No Windows Explorer, acessar a pasta do projeto e copiar o caminho dela (use a barra de endereços)
4.  De volta ao terminal de comando, digite cd e cole o caminho da pasta do projeto
5.  Dê enter para acessar a pasta
6.  Digite o comando para iniciar o servidor da API: json-server --watch dados.json
7.  Acesse o endereço localhost:3000 no navegador para conferir a API e seus recursos (vagas e candidatos)

Dica: para encerrar o servidor, pressione CTRL C na linha de comando.