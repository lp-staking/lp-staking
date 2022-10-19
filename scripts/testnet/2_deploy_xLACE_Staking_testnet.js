const Staking = artifacts.require("Staking");
const DevMock = artifacts.require("DevMock");
const xDevTokenMock = artifacts.require("xDevTokenMock");

const fromWei = web3.utils.fromWei;

const { ether } = require("@openzeppelin/test-helpers");

module.exports = async (deployer, network, accounts) => {
  const rewardPerBlock = await ether("10");
  console.log("Address owner: ", accounts[0]);
  // console.log('deployer', deployer.address);

  await deployer.deploy(Staking);
  const staking = await Staking.deployed();

  await deployer.deploy(DevMock);
  const devToken = await DevMock.deployed();

  await deployer.deploy(xDevTokenMock, staking.address);
  const xDev = await xDevTokenMock.deployed();

  await devToken.mintArbitrary(accounts[0], await ether("10000"));
  await devToken.mintArbitrary(staking.address, await ether("100000"));
  await staking.initialize(
    rewardPerBlock,
    devToken.address,
    xDev.address
  );

  await lovelaceToken.approve(staking.address, await ether("10000"));
  await staking.stake(await ether("100"));

  console.log("Address Staking contract: ", staking.address);
  console.log("Address DEV Token: ", devToken.address);
  console.log("Address xDEV Token: ", xDev.address);
  console.log("Address owner: ", accounts[0]);
  console.log("DEV : ", fromWei(await devToken.balanceOf(accounts[0])));
  console.log("xDEV: ", fromWei(await xDev.balanceOf(accounts[0])));
};
