# Etapa 1: Build
FROM node:slim AS builder

# Crear directorio
WORKDIR /app

# Copiar archivos y dependencias
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.* ./
RUN npm install

# Copiar el resto del código
COPY . .

# Construir la app
RUN npm run build

# Resultado queda en /app/dist
