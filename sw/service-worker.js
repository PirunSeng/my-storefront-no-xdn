import { Cloud, NextWeek } from '@material-ui/icons'
import { configureServiceWorker } from 'react-storefront/sw'

const maxAgeSeconds = 60 * 60 // 1 hour

configureServiceWorker({
  api: [
    { path: '/api/p/[productId]', maxAgeSeconds },
    { path: '/api/s/[subcategoryId]', maxAgeSeconds },
    { path: '/api', maxAgeSeconds },
  ],
})

// 1. React Storefront
//   1.1 Framework: Next.js
//   1.2 Deployment: Vercel
//   1.3 API: Node.js
//   1.4 Database:
//     1.4.1 MySQL: Remote db. AWS, Google Cloud, Ms Azure. (https://vercel.com/guides/deploying-next-and-mysql-with-vercel)
//     1.4.2 MongoDB: MongoDB Atlas (https://vercel.com/guides/deploying-a-mongodb-powered-api-with-node-and-vercel)