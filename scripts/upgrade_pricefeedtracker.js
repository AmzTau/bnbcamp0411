const { ethers, upgrades } = require("hardhat");

async function main() {
  // TODO Check this address is right before deploying.
  const deployedProxyAddress = "0x27F0de681717917E30Cd006b27FBF53a9f507A24";

  const PriceFeedTrackerV2 = await ethers.getContractFactory(
    "PriceFeedTrackerV2"
  );
  console.log("Upgrading PriceFeedTracker...");

  await upgrades.upgradeProxy(deployedProxyAddress, PriceFeedTrackerV2);
  console.log("PriceFeedTracker upgraded");
}

main();
