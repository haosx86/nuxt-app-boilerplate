import { Datastore } from 'nedb-async-await'
import isDev from '../helpers/isDev'

const usersDataset = new Datastore({
  filename: 'db/users.db',
  autoload: true,
})

if (isDev) {
  usersDataset.nedb.persistence.setAutocompactionInterval(15 * 1000)
}

export default usersDataset
