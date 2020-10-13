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