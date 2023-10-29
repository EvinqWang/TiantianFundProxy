FROM node:19

WORKDIR /app
COPY . /app

RUN npm config set registry "https://registry.npmmirror.com/" \
    && npm install -g pnpm \
    && pnpm i

EXPOSE 5000
CMD ["pnpm", "start"]   