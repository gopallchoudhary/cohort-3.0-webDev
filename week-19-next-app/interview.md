1. prisma singleton prevents the too many prisma client from being created
   -> during hot reload (when code changes) the server restarts and creates instance of prisma client everytime

2.