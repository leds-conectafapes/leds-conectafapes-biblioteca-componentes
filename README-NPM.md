# Biblioteca de componentes LEDS-CONECTAFAPES

Biblioteca global de componentes Vue.js para os sistemas do Conecta Fapes, desenvolvida pelo time LEDS.

## Sobre a biblioteca

- Componentes reutilizáveis construídos com Vue 3 (Composition API)
- Estilização com Tailwind CSS v4
- Design system consistente para todos os projetos

## Documentação (Requer VPN)

- [Documentação completa dos componentes disponíveis via Storybook](http://storybooks.conectafapes.leds.dev.br:8050/)

## Pre-requisitos

- Tailwind ^4.1.4

- Vue ^3.5.13

- Dayjs ^1.11.13

## Configurando a biblioteca

### Instalação

```shell
npm i '@leds-ifes/components'
```

### Configurando seu main.css

Adicione o seguinte trecho ao seu arquivo CSS principal do projeto:

```css
@import "@leds-ifes/components/styles";
```

### Usando um componente da biblioteca

No bloco `<script>`, importe o componente:
```ts
import { GenericButton } from '@leds-ifes/components'
```

No bloco `<template>`, utilize o componente:
```html
<GenericButton label="Botão" />
```