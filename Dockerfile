FROM node:22


COPY node_modules ./node_modules
COPY dist ./dist

CMD ["node", "dist/index.js"]