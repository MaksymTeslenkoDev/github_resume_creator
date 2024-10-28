FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ARG REACT_APP_GITHUB_API_URL
ARG REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
ARG REACT_APP_ENV

ENV REACT_APP_GITHUB_API_URL=$REACT_APP_GITHUB_API_URL
ENV REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN=$REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
ENV REACT_APP_ENV=$REACT_APP_ENV

RUN npm run build

FROM nginx:alpine AS production

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
