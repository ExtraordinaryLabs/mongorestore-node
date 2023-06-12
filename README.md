# Mongorestore on Child Process

Send BSON and JSON metadata to Mongo DB Atlas using child-process library.

## Installation

Install mongostore locally

```bash
wget https://fastdl.mongodb.org/tools/db/mongodb-database-tools-ubuntu2004-x86_64-100.5.0.tgz
tar -zxvf mongodb-database-tools-ubuntu2004-x86_64-100.5.0.tgz
mv mongodb-database-tools-ubuntu2004-x86_64-100.5.0/bin/* /usr/local/bin/
```

Or run on Docker

```bash
docker-compose up -d
docker exec -it node bash
npm install
npm run dev
```
