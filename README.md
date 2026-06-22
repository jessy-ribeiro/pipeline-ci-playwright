🚀 Pipeline CI com Playwright
🎯 Objetivo

Automatizar testes End-to-End (E2E) utilizando Playwright integrado ao GitHub Actions, garantindo execução contínua em diferentes cenários (push, manual e agendado), com geração e armazenamento de relatórios de testes.

🧰 Tecnologias utilizadas
Node.js
Playwright
GitHub Actions
Git
📁 Estrutura do projeto
.github/workflows/
└── e2e-tests.yml

tests/
playwright.config.js
⚙️ Configuração do CI (GitHub Actions)

A pipeline está configurada para executar em três cenários:

🔁 Push na branch master
▶️ Execução manual (workflow_dispatch)
⏰ Execução agendada (cron diário)
▶️ Execução local

Para rodar os testes localmente:

npm install
npx playwright test
🔄 Execução da Pipeline

A pipeline é executada automaticamente quando:

Um commit é enviado para a branch master
É acionada manualmente no GitHub Actions
É executada automaticamente em horário agendado (cron)
📊 Relatórios de testes

Após cada execução da pipeline:

O relatório HTML do Playwright é gerado
O relatório é armazenado como Artifact no GitHub Actions
📍 Onde acessar:

GitHub → Actions → execução do workflow → Artifacts → playwright-report

🧪 Validação da pipeline

A pipeline contempla:

✔ Execução automática por push
✔ Execução manual via GitHub Actions
✔ Execução agendada (schedule)
✔ Execução de testes E2E com Playwright
✔ Geração de relatório HTML
✔ Armazenamento do relatório como artifact
✔ Pipeline executando com sucesso
📌 Resultado esperado

Ao final da execução:

Pipeline executa sem erros
Testes automatizados passam com sucesso
Relatório de execução é gerado
Artefato fica disponível para download no GitHub Actions
🧠 Conceitos aplicados
Integração Contínua (CI)
Automação de testes E2E
Pipelines no GitHub Actions
Execução em múltiplos gatilhos (push, manual, schedule)
Geração e persistência de artefatos
Testes automatizados com Playwright
