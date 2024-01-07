# Build client
FROM node:alpine3.18 AS client-build
WORKDIR /app
COPY client/ ./
RUN npm install
RUN npm run build

# Build server
FROM node:alpine3.18
WORKDIR /server
COPY server/ ./
RUN npm install
COPY --from=client-build /app/dist /server/dist
EXPOSE 5000
CMD ["npm", "start"]
