FROM node:10 as builder

# Create app directory
WORKDIR /usr/src/app

# copy package.json to the container
COPY package*.json ./

# If you are building your code for production
# RUN npm ci --only=production
RUN npm install

# copy everything to container /usr/src/app
COPY . . 

# expose ports
EXPOSE 3000

RUN npm run build

#multi-stage build
FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html