FROM node:16

ENV PORT 3333

RUN mkdir -p /usr/src/app/backend
WORKDIR /usr/src/app/backend

COPY package*.json /usr/src/app/backend/
RUN npm install

COPY . .
# COPY . /usr/src/app/backend/

EXPOSE 3333

CMD [ "npm", "start" ]
# CMD [ "ts-node-dev", "--transpile-only", "src/server.ts"]