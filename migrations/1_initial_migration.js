const Staking = artifacts.require("Staking");

module.exports = async function (deployer) {

  await deployer.deploy(Staking, "0xfbb4f2f342c6daab63ab85b0226716c4d1e26f36");

  const saleInstance = await Staking.deployed();

  console.log("Staking deployed at:", saleInstance.address);
};

