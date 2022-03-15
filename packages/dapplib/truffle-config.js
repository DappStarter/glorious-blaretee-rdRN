require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remain eternal gesture nasty fringe slide'; 
let testAccounts = [
"0xbdabb3e00e16e38d2bc703b8858aa0d84da395a43db7d44079059672811d6d3c",
"0x3114d6b75ba723cee3107a4e5ed925235492b6a1ffe76227adb2d5693ef976c9",
"0x8f26e7e49b3090211a505455b6a5744fae7ef4ed1f0bf851d1def58647f909b4",
"0x2d3813b819a483d41a0fb8e0c78f7f561e82ec759d507503de6a61a323e23310",
"0xcb08efaaa6c37b1680248c7dffeb1d97cc6dd897f066a2982e1c101edd035a97",
"0xf1dd89c2c370639c86fa8e2c441998e64830f9ee9041f36421f839ff7321809b",
"0xb9e9646d3103539a8432254986b596b99c5bc7e9a9a2665d634774a3bb2a2045",
"0xbc4c6e27d0d59b81f1c7838026955c9d0d1052cd8e14cf27e1968a6d787ae89c",
"0xc0b9981fe5d1bef1f83a3d0d3d6f0e21b15ca571195f7f1521c63f9f2bc00d36",
"0x99a481b83f26619038e8289757ced947609ab310b0185fd88066ebe43742e62e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

