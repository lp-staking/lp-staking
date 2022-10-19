const Staking = artifacts.require("Staking");
const ERC20Mock = artifacts.require("ERC20Mock");

const fromWei = web3.utils.fromWei;

const { ether } = require("@openzeppelin/test-helpers");

module.exports = async (deployer, network, accounts) => {

  console.log("Address owner: ", accounts[0]);
  await deployer.deploy(ERC20Mock, 'Dev Token', 'DEV');
  const token = await ERC20Mock.deployed();

  await token.mint(accounts[0], await ether("100000"));

  console.log("Address Mock Token: ", token.address);
  console.log("Address owner: ", accounts[0]);
};
