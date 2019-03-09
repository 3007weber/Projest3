if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'abc'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'abc'.");
}
var abc = function (_, Kotlin) {
  'use strict';
  function main(args) {
    window.alert('Hello, World!');
  }
  var package$xyz = _.xyz || (_.xyz = {});
  package$xyz.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('abc', _);
  return _;
}(typeof abc === 'undefined' ? {} : abc, kotlin);

//# sourceMappingURL=abc.js.map
