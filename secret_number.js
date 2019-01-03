'use strict';
module.exports = function () {
  const secretNumber = Math.floor((Math.random() * 1000000) + 1);
  const secretNumberGenerator = function () {
    return secretNumber;
  }
  return secretNumberGenerator;
};