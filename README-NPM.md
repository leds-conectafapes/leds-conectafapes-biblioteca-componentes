# Biblioteca de componentes LEDS-CONECTAFAPES

Biblioteca global de componentes Vue.js para os sistemas do Conecta Fapes, desenvolvida pelo time LEDS.

## Sobre a biblioteca

- Componentes reutilizáveis construídos com Vue 3 (Composition API)
- Estilização com Tailwind CSS v4
- Design system consistente para todos os projetos

## Documentação

Documentação completa dos componentes disponíveis via Storybook 

- Vai ter um LINK

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

Adicione os seguintes trechos ao seu arquivo CSS principal do projeto:

```css
@source "../../node_modules/@leds-ifes/components/src/components/**/*.vue"; /* Permite que o Tailwind reconheça e aplique estilos aos componentes */

@import "../../node_modules/@leds-ifes/components/src/leds-ifes-styles"; /* Importa estilos globais da biblioteca (cores, fontes, ícones) */
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