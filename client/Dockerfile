# First Stage: Building the application
FROM node:alpine3.18 AS build
WORKDIR /app
COPY . .
RUN npm install
# RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "dev"]

# # Second Stage: Setting up Nginx to serve the application
# FROM nginx:stable-alpine
# COPY --from=build /app/build /usr/share/nginx/html/
# COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# EXPOSE 3000
# CMD ["nginx", "-g", "daemon off;"]

