const { exec } = require('child_process');
const dotenv = require('dotenv')
const fs = require('fs')
dotenv.config()

const path = './db';
const { MONGO_URI } = process.env

exec(`mongorestore --uri="${MONGO_URI}" --drop ${path}`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
