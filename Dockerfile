#Runtime develop
FROM node:16.8-alpine3.14 as development

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

#Runtime production
FROM node:16.8-alpine3.14 as production

WORKDIR /app

#copy dependencies files
COPY package*.json ./

#instal runtime dependencies (without dev dependencies)
RUN npm ci --omit=dev

#copy production build
COPY --from=development /app/dist/ ./dist/

#expose aplication port
EXPOSE 3000

#start aplication
CMD [ "node","dist/main.js" ]