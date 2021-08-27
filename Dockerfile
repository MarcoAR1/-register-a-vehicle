FROM node:16-alpine3.11
WORKDIR /app
COPY . .
RUN npm install -g npm@7.21.1 \
    && npm install \
    && npm run build
CMD ["npm","start"]
