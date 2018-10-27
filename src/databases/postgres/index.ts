import { pool } from './connect'

const query = {
  name: 'get-movies',
  text: 'SELECT * FROM MOVIES WHERE release_date < $1 AND count_stars >= $2',
  values: ['01-01-2000', 4]
}

export default async () => {
  const { rows } = await pool.query(query)
  return rows
}
