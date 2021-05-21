const LogRocket = require('logrocket');

exports.onClientEntry = () => {
  console.log('LogRocket 🚀');
  LogRocket.init('2wlhjq/rpi');
};
