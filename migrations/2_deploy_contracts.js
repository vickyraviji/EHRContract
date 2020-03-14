const EHRContract = artifacts.require("./EHRContract.sol");

module.exports = function(deployer) {
  deployer.deploy(EHRContract);
};
