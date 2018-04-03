import * as fetch from 'isomorphic-fetch';
import * as StellarSdk from 'stellar-sdk';

export function getTestServer() {
  StellarSdk.Network.useTestNetwork();

  return new StellarSdk.Server('https://horizon-testnet.stellar.org');
}

export function createKeypair() {
  return StellarSdk.Keypair.random();
}

function fetchFirendBot(publicKey: string) {
  const endpoint = 'https://friendbot.stellar.org';

  return fetch(endpoint + '?addr=' + publicKey)
    .then(response => response.json())
    .then(response => {
      return response;
    });
}

export function fundTestAccount(publicKey: string) {
  fetchFirendBot(publicKey).then(response => {
    console.log(response);
  });
}

export async function getAccountInfo(server: any, publicKey: string) {
  return server.loadAccount(publicKey).then((result: any) => {
    return result;
  });
}
