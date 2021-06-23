const LogRocket = require('logrocket');
//* Log rocket 🚀
exports.onClientEntry = () => {
  console.log('LogRocket 🚀');
  LogRocket.init('dptymq/rpi-website');
};

exports.onClientEntry = () => {
  var Tawk_API = Tawk_API || {};
  const Tawk_LoadStart = new Date();
  (function () {
    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/608a724f5eb20e09cf37b1e1/1f4ect2bj';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  })();
};
