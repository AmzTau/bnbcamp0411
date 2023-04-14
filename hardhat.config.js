/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-toolbox");

require("@nomiclabs/hardhat-ethers");

require("@openzeppelin/hardhat-upgrades");

const BNBTEST_RPC_URL = process.env.BNBTEST_RPC_URL_HTTP;
const PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY_DEV1;
const BSCSCAN_KEY = process.env.BSCSCAN_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
 solidity: "0.8.18",
 defaultNetwork: "hardhat",
 networks: {
   localhost: {
     chainId: 31337,
   },
   bnbtest: {
     url: BNBTEST_RPC_URL,
     accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
     chainId: 97,
   },
 },
 etherscan: {
   apiKey: BSCSCAN_KEY,
 },
};