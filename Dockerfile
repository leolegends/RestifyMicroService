# IMAGEM DO NODE
FROM mhart/alpine-node:10
WORKDIR app/
LABEL Description="NodeMicroService"
COPY . .
RUN npm install
EXPOSE 8040
CMD ["node","app.js","&"]