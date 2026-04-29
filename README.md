# Lista de Tarefas (Todo App) com IA

Bem-vindo ao projeto **Lista de Tarefas**!

Este projeto é uma demonstração de como utilizar Inteligência Artificial para gerar uma aplicação completa e estruturada usando o framework [Next.js](https://nextjs.org/).

## 🤖 O Papel do `guia.md`

Para construir esta aplicação, criamos um arquivo chamado **[`guia.md`](./guia.md)**. Este arquivo serve como um "prompt mestre" para guiar a Inteligência Artificial na criação do projeto. 

Em vez de pedir para a IA criar o código sem direção, o `guia.md` especifica detalhadamente a arquitetura desejada, os padrões e os requisitos de testes, garantindo um resultado modular e escalável.

## 📹 Sobre o Vídeo e o Projeto

Criei um vídeo mostrando como é fácil criar uma aplicação de lista de tarefas usando Next.js, mas demonstrando principalmente que é possível usar este `guia.md` (gerado em ferramentas como o **Gemini** ou **ChatGPT**) para instruir a IA a gerar uma aplicação robusta com **Agents, Skills e SDD (Software Design Document)** de forma automatizada e profissional.

Além disso, o vídeo demonstra como você pode utilizar o assistente **Antigravity** dentro do seu editor: basta criar a pasta do projeto previamente, inserir o `guia.md` nela, e enviar um prompt simples como *"crie a aplicação usando o guia.md nesta pasta"*. A IA lerá o arquivo como contexto e construirá toda a arquitetura e funcionalidades para você!

## 🚀 Tutorial: O que tem na aplicação?

A aplicação gerada adota conceitos de Clean Architecture. Aqui está o resumo do que foi construído:

### Funcionalidades
- **Adicionar tarefa**: Crie novas tarefas.
- **Listar tarefas**: Visualize suas tarefas.
- **Marcar como concluída**: Alterne o status das tarefas.
- **Excluir tarefa**: Remova tarefas.
- **Persistência**: Suas tarefas são salvas no armazenamento local (localStorage) do navegador.

### Arquitetura Orientada a IA
A estrutura do código é separada por Agentes e Habilidades:
1. **Agents (`/src/agents`)**: Orquestram a lógica da aplicação.
   - `TaskAgent`: Gerencia a lógica de negócio das tarefas.
   - `StorageAgent`: Abstrai a comunicação com o armazenamento local.
2. **Skills (`/src/skills`)**: Funções isoladas, testáveis e com responsabilidade única que os agentes utilizam (ex: `createTask`, `saveData`).
3. **Documentação SDD (`/docs`)**: A pasta `docs/` inclui todos os documentos de arquitetura, diagramas de fluxo de dados e estratégias de testes.
4. **Testes Unitários**: O projeto possui testes configurados com Jest, garantindo a estabilidade de cada Agent e Skill.

## 🛠️ Como Executar

Para rodar o projeto localmente:

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🧪 Rodando os Testes

Para executar os testes unitários:
```bash
npm test
```
