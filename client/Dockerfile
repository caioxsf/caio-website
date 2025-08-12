# ---------- Builder: instala TODAS as deps e faz o build ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Melhora o cache: copia apenas manifests primeiro
COPY package.json package-lock.json* ./

# Instala TODAS as dependências (inclui devDependencies)
RUN npm ci

# Copia o restante do projeto
COPY . .

# Build de produção do Next
RUN npm run build

# ---------- Runner: imagem final leve, só com deps de produção ----------
FROM node:20-alpine AS runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app

# Copia apenas os arquivos necessários para rodar
COPY package.json package-lock.json* ./

# Instala SOMENTE dependências de produção
RUN npm ci --omit=dev

# Copia artefatos do build e assets estáticos
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
# Copie também configs usadas em runtime, se existirem:
# COPY --from=builder /app/next.config.mjs ./next.config.mjs

# Next usa a porta 3000
EXPOSE 3000

# Inicia o servidor de produção
CMD ["npm", "start"]