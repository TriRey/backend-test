FROM node:22

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci
#RUN npm run build

COPY node_modules ./node_modules
COPY dist ./dist

ENV NODE_ENV="Sebastian T"

EXPOSE 3000
CMD ["node", "dist/index.js"]