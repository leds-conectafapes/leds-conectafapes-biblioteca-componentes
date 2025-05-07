# Etapa 1: build do Storybook
FROM node:18 AS builder

# Define diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto
COPY . .

# Instala dependências
RUN npm install

# Gera o build do Storybook
RUN npm run build-storybook

# Etapa 2: imagem final com Nginx
FROM nginx:alpine

# Copia os arquivos gerados para o Nginx
COPY --from=builder /app/storybook-static /usr/share/nginx/html

# Expõe a porta do Nginx
EXPOSE 80

# Comando padrão do Nginx
CMD ["nginx", "-g", "daemon off;"]
