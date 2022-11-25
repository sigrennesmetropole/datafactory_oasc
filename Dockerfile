FROM    node:14.21.1-buster-slim
WORKDIR /usr/src/app
COPY    / .
RUN     npm install
CMD     [ "npm", "start" ]
