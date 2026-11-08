# 🤖 IT Assistant

Assistente de suporte de TI para **Windows**. Você descreve um problema comum no Windows e ele sugere os passos para resolver.

Projeto de estudo da pós **Engenharia de Software com IA Aplicada (UNIPDS)**.
Cada módulo do curso vira uma camada nova do assistente.

## Evolução por módulo

| Módulo | O que entra no assistente |
| --- | --- |
| 1 — Fundamentos de IA e LLMs | Normalização de texto, busca por palavra-chave e classificador de categoria com TensorFlow.js |

## Estrutura do projeto

- `data/` → dados que o sistema conhece: tickets e artigos da base de conhecimento.
- `utils/` → funções auxiliares usadas em diferentes partes do projeto.
- `services/` → executa ações usando os dados do sistema.
- `mlWorker.js` → parte de Machine Learning.
- `index.js` → ponto de entrada do projeto.

## Como rodar

```bash
npm install
npm start
```
