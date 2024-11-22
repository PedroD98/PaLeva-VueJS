# PaLevá - Sistema da Cozinha

## Descrição
Extensão do projeto PaLevá. Deve ser usado pela cozinha do restaurante para controlar o status dos pedidos.

## Funcionalidades
- <p> <strong>Alterar status dos pedidos</strong>: A cozinha pode alterar o status do pedido para 'Em preparação', 'Pronto' e 'Cancelado'. Se cancelado, é possível informar o motivo do cancelamento</p>
- <p> <strong>Ver pedidos</strong>: Os pedidos que já foram criados serão exibidos em index.html</p>

## Tecnologias Utilizadas
- **Linguagem**: HTML, CSS, JavaScript 
- **Framework**: VueJS

## Importante 🚨

O projeto está configurado para exibir os pedidos do restaurante Campus Lanches, que é gerado por seeds.rb no projeto principal.
Para mudar essa configuração, altere as linhas API_BASE_URL nos arquivos orders-list.js e orders-details.js

```bash
  const API_BASE_URL = "http://localhost:3000/api/v1/restaurants/CÓDIGO_DO_RESTAURANTE/orders"
```
