const PTOKEN = artifacts.require("PTOKEN");

module.exports = function (deployer) {
  deployer.deploy(PTOKEN);
};