const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  app.on('exit', () => {
    prisma.$disconnect();
  });
  
