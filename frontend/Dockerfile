FROM node:16

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app/frontend
WORKDIR /usr/src/app/frontend

# Installing dependencies
COPY package*.json /usr/src/app/frontend
RUN npm install


# Copying source files
COPY . /usr/src/app/frontend
# RUN chmod -R +x node_modules/next/dist/bin/next-*

# Building app
# RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "dev"