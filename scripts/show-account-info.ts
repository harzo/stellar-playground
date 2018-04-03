import { argv } from 'yargs';
import { getAccountInfo, getTestServer } from '../helpers';

if (!argv.id || argv.id === '') {
  throw new Error(`Missing Account ID. Provide it through --id flag.`);
}

const server = getTestServer();

getAccountInfo(server, argv.id).then(result => console.log(result));
