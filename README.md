# Github Resume Generator
This repository contains a React application that generates a dynamic resume based on a user's GitHub profile. It fetches user data, repositories, and languages used, displaying them in a clean, resume-like format. The application is built with Create React App, utilizes Docker for containerization, and is deployed to AWS S3 for static website hosting.

### Deployed link 
- AWS s3 deployed version: http://www.my.githubresumebuilder.cloud.s3-website-us-east-1.amazonaws.com/MaksymTeslenkoDev

### Steps to run application 

- Dev: 
```bash
npm run dev
```

- Run localy nginx webserver wich servers application as static
```bash
docker compose up -d
```

- Build production version
```bash
npm run build
```

