# # Stage 1: Build
# FROM node:21 AS builder
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# # RUN npm run build

# # Stage 2: Production
# FROM node:21

# # Install MongoDB
# RUN apt-get update
# RUN apt-get install -y gnupg
# RUN wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2_amd64.deb
# RUN dpkg -i libssl1.1_1.1.1f-1ubuntu2_amd64.deb
# RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -
# RUN echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/4.4 main" | tee /etc/apt/sources.list.d/mongodb-org-4.4.list
# RUN apt-get update
# RUN apt-get install -y mongodb-org
# # RUN rm -rf /var/lib/apt/lists/*

# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install --only=production
# COPY --from=builder /app .

# # Create the MongoDB data directory
# RUN mkdir -p /data/db

# # Expose ports for MongoDB and the application
# EXPOSE 27017 3000

# # Start MongoDB and the Node.js application
# CMD mongod --bind_ip_all & node server.js

# Stage 1: Build
FROM node:21-slim
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --production
COPY . .

# Install MongoDB
RUN apt-get update && apt-get install -y gnupg wget
RUN wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2_amd64.deb && dpkg -i libssl1.1_1.1.1f-1ubuntu2_amd64.deb && rm libssl1.1_1.1.1f-1ubuntu2_amd64.deb
RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -
RUN echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/4.4 main" | tee /etc/apt/sources.list.d/mongodb-org-4.4.list
RUN apt-get update && apt-get install --no-install-recommends -y mongodb-org
# RUN rm -rf /var/lib/apt/lists/*

# Create the MongoDB data directory
RUN mkdir -p /data/db

# Expose ports for MongoDB and the application
EXPOSE 27017 3000

# Start MongoDB and the Node.js application
CMD mongod --bind_ip_all & node server.js