FROM node:10.13.0-alpine
FROM keymetrics/pm2:latest
MAINTAINER 
ADD . /ts-test1/
WORKDIR /ts-test1
ENV HOST 0.0.0.0
ENV PORT 3000
EXPOSE 3000
CMD ["pm2-runtime", "pm2.json"]
