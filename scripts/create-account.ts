import * as fs from 'fs'
import { createKeypair } from '../helpers';

const pair = createKeypair();

if (!fs.existsSync('./keypairs/')) {
  fs.mkdir('./keypairs', () => {
    console.log(`'keypairs' directory created`);
  });
}

const filename = 'keypair-' + Math.floor(Date.now() / 1000).toString();
const data = 'Public Key: ' + pair.publicKey() + '\nSecret: ' + pair.secret();

try {
  fs.writeFile('./keypairs/' + filename, data, () => {
    console.log(`'keypair' saved in keypairs/` + filename);
  });
}
catch {
  console.log('! Error during keypair file generation');
}
