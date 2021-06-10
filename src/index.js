require('./style.css');
const { widget } = require('./widget');

(function () {
  document.body.appendChild(widget());
})();
