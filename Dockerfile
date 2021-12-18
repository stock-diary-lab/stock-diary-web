FROM node:14-alpine as builder

# RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package.json yarn.lock ./

RUN yarn install 
RUN npm install @craco/craco -g --slient

COPY . .
RUN npm run build

FROM nginx:latest
RUN rm -rf /etc/nginx/conf.d/default.d
COPY conf /etc/nginx/conf.d

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
