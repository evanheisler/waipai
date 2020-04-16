import cors from 'cors'
import { use, server } from 'nexus'
import { prisma } from 'nexus-plugin-prisma'

use(prisma())
server.express.use(cors())
