# 🧪 Desafio Revvo QA – Cypress

Este projeto foi desenvolvido como parte do **Desafio Revvo para Analista de Testes**, utilizando o framework **Cypress** para automação de testes end-to-end no ambiente Moodle Sandbox.

---

## 📁 Estrutura do Projeto

```
desafio-revvo-qa/
├── cypress/
│   ├── e2e/
│   │   └── curso.cy.js             # Script principal do teste automatizado
│   ├── fixtures/              # (opcional - vazio por padrão)
│   ├── support/
│   │   ├── commands.js             # Comandos customizados (ex: loginAdmin)
│   │   └── e2e.js                  # Setup geral do projeto
├── cypress.config.js               # Configurações do Cypress
├── package.json                    # Dependências do projeto
```

---

## 🚀 Executando o Projeto

### 1. Instalar dependências

```bash
npm install
```

### 2. Abrir Cypress com UI

```bash
npx cypress open
```

- Escolha o modo **E2E Testing**
- Selecione o navegador desejado
- Execute o teste `curso.cy.js`

### 3. Executar Cypress no modo headless (sem interface)

```bash
npx cypress run --spec "cypress/e2e/curso.cy.js"
---

## ✅ Fluxo Automatizado

O teste cobre o seguinte fluxo funcional:

- Acessa o site: [https://sandbox.moodledemo.net/login/index.php](https://sandbox.moodledemo.net/login/index.php)
- Realiza login com o usuário `admin / moodle`
- Altera o idioma da plataforma para **Português - Brasil**
- Acessa o menu **Administração do site > Cursos**
- Cria um curso chamado **Curso Desafio Revvo QA**
- Verifica se o curso foi criado com sucesso

---

## 💻 Tecnologias

- [Cypress](https://www.cypress.io/)
- Node.js

---

## 📂 Git Ignore Sugerido

```
node_modules/
cypress/videos/
cypress/screenshots/
cypress/downloads/
.vscode/
```

---

## ✉️ Envio

Após rodar e validar os testes, envie este projeto compactado ou publique em seu GitHub com o nome:

```
desafio_revvo_qa
```

E envie para:

```
plataforma@somosrevvo.com.br
```

---

## 👨‍💻 Autor

Seu Nome  
[Seu LinkedIn ou GitHub]
