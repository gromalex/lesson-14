import './hello'
import './base'
import { showCurrentDate } from './showCurrentDate'

import { fetchData } from './fetchData'
import { Posts } from './posts'

showCurrentDate()

fetchData('GET', 'https://jsonplaceholder.typicode.com/posts', (response) => {
  const data = JSON.parse(response)
  new Posts(data, wrap)
})
