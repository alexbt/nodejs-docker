FROM alpine:3.5
EXPOSE 8080

RUN apk add --no-cache nodejs=6.9.2-r1 \
	&& rm -rf /var/cache/apk/*

ADD . ./
RUN npm install

ENTRYPOINT npm start
