const noble = require('noble-secp256k1');
const { toHex, keccak256 } = require('web3-utils');



// Generate private key
const privateKey = noble.utils.randomPrivateKey();

// Generate public key
const publicKey = noble.getPublicKey(privateKey);

// Format public key into readable ETH address
const formattedPublicKey = keccak256(publicKey.slice(1)).slice(-20);

console.log('Private key: ', toHex(privateKey));
console.log('Public key: ', toHex(formattedPublicKey));
