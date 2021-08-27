FROM node:16-alpine3.11
WORKDIR /app
COPY . .
RUN npm install -g npm@7.21.1
RUN npm install
RUN npm run build
ENV PORT 3000
CMD ["npm","dev:back"]
