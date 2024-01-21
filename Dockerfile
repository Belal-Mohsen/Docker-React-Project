# Build client
FROM node:alpine3.18 AS client-build
WORKDIR /app
COPY client/ ./

# Define build-time variables for client
ARG VITE_APP_TEMPLATE_ID
ARG VITE_APP_SERVICE_ID
ARG VITE_APP_PUBLIC_KEY

# Set them as environment variables
ENV VITE_APP_TEMPLATE_ID=$VITE_APP_TEMPLATE_ID
ENV VITE_APP_SERVICE_ID=$VITE_APP_SERVICE_ID
ENV VITE_APP_PUBLIC_KEY=$VITE_APP_PUBLIC_KEY

RUN npm install
RUN npm run build

# Build server
FROM node:alpine3.18
WORKDIR /server
COPY server/ ./

# Define build-time variable for server
ARG API_TOKEN

# Set it as an environment variable
ENV API_TOKEN=$API_TOKEN

RUN npm install
COPY --from=client-build /app/dist /server/dist
EXPOSE 5000
CMD ["npm", "start"]

