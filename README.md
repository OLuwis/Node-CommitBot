## EN

### Introduction:

CommitBot is a bot made with Node and TypeScript, used to create automatic commits and thus make your GitHub greener.

The bot uses the GitHub API to access the repository remotely, so you don't need to keep a personal server running for it to work.

The bot's function is to edit a text file, such as the repository's "output.txt," to maintain a log of commits made over time, thus providing a trace of its functionality.

### How to Deploy:

The CommitBot repository is designed to be deployed for free on Cloudflare Workers. If you want to do the same on other platforms, you just need to take the code inside the "scheduled" function within the main file.

If you want to deploy on Cloudflare Workers, you should do the following:

1. Clone this repository:
`git clone https://github.com/OLuwis/Node-CommitBot.git`
2. Run the Wrangler deployment command:
`npx wrangler deploy`
3. Create a GitHub authentication token:
[`Generating a user access token for a GitHub App`](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)
4. Create an environment variable for the token: [`Cloudflare Workers - Secrets`](https://developers.cloudflare.com/workers/configuration/secrets/#via-the-dashboard)

## BR

### Introdução:

O CommitBot é um bot feito com Node e Typescript, utilizado para criar commits automáticos e assim tornar seu Github mais verde.

O bot utiliza a api do Github para acessar o repositório de forma remota, fazendo com que assim você não precise manter um servidor pessoal ligado para funcionar.

A função do bot é editar um arquivo de texto, como o "output.txt" do repositório, para assim manter um log de commits realizados durante um tempo, assim tendo um rastro da funcionalidade do mesmo.

### Como publicar:

O repositório do CommitBot é feito para ser publicado de graça no Cloudflare Workers, caso queira fazer o mesmo em outras plataformas, você só precisar pegar o código dentro da função "scheduled", dentro do arquivo principal.

Caso queira publicar no Cloudflare Workers, voce deverá fazer o seguinte:

1. Clonar este repositório:
`git clone https://github.com/OLuwis/Node-CommitBot.git`
2. Executar o comando de publicação do Wrangler:
`npx wrangler deploy`
3. Criar um token de autenticação do Github:
[`Como gerar um token de acesso do usuário para um GitHub App`](https://docs.github.com/pt/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)
4. Criar uma variável de ambiente para o token: [`Cloudflare Workers - Secrets`](https://developers.cloudflare.com/workers/configuration/secrets/#via-the-dashboard)