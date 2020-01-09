FROM node:12 AS builder
WORKDIR /app

COPY client/package.json /app/.
COPY client/yarn.lock /app/.
RUN yarn install --frozen-lockfile

COPY client /app
RUN yarn build




FROM python:3.7-buster

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY server/requirements.txt /usr/src/app/

RUN pip3 install --no-cache-dir -r requirements.txt

COPY server/. /usr/src/app
COPY schema /usr/src/schema

COPY --from=builder /app/build /usr/src/app/static

EXPOSE 8080

ENTRYPOINT ["python3"]

CMD ["server.py"]
