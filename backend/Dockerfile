FROM postgres:latest

# Copia o arquivo init.sql para dentro do container
COPY backend/src/database/init.sql /docker-entrypoint-initdb.d/

# Define as variáveis de ambiente para o Postgres
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB postgresdb