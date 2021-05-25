const LogRocket = require('logrocket');
//* Log rocket 🚀
exports.onClientEntry = () => {
  console.log('LogRocket 🚀');
  LogRocket.init('2wlhjq/rpi');
};
