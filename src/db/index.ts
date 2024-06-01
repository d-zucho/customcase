import { PrismaClient } from '@prisma/client'

declare global {
  var cachedPrisma: PrismaClient
}

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }

  prisma = global.cachedPrisma
}

export const db = prisma

// the purpose of this file is so that we don't have to create a new PrismaClient instance every time we want to interact with the database.

// this file accomplishes the following:
// 1. It imports the PrismaClient from the @prisma/client package.
// 2. It declares a global variable cachedPrisma.
// 3. It initializes a new PrismaClient instance and assigns it to the prisma variable.
// 4. It checks if the NODE_ENV environment variable is set to production.
// 5. If NODE_ENV is set to production, it creates a new PrismaClient instance.
// 6. If NODE_ENV is not set to production, it checks if the global cachedPrisma variable is defined.
// 7. If the global cachedPrisma variable is not defined, it creates a new PrismaClient instance and assigns it to the global cachedPrisma variable.
// 8. It assigns the global cachedPrisma variable to the prisma variable.
// 9. It exports the prisma variable as db.
// 10. It ensures that only one PrismaClient instance is created in development mode.

//? A Prisma Client is a type-safe database client that helps you interact
//? with your database. It is generated based on your Prisma schema and
//? provides a set of methods for querying, writing, and updating data in your database.
