# Pipeline CI com Playwright

## Objetivo

Automatizar testes E2E utilizando GitHub Actions.

## Tecnologias

* Node.js
* Playwright
* GitHub Actions
* Git

## Estrutura

.github/workflows/
└── e2e-tests.yml

tests/

## Instalação

```bash
npm install
```

## Execução local

```bash
npx playwright test
```

## Execução da Pipeline

A pipeline é executada automaticamente a cada push na branch master.

Também pode ser iniciada manualmente pelo GitHub Actions.

## Relatórios

Após cada execução, o relatório Playwright fica disponível em:

Actions → Artifacts → playwright-report

## Resultado esperado

* Pipeline executando com sucesso
* Testes automatizados aprovados
* Relatórios armazenados
