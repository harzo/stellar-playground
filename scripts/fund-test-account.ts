import { argv } from 'yargs';
import { fundTestAccount } from '../helpers';

if (!argv.id || argv.id === '') {
  throw new Error(`Missing Account ID. Provide it through --id flag.`);
}

fundTestAccount(argv.id);
