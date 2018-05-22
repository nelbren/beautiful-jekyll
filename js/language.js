if (typeof done == 'undefined') {
  var lang = navigator.language || navigator.userLanguage;
  var done = 1;
  if (lang.indexOf('es') == 0) {
    if (window.location.pathname != '/es/') {
      window.location = '/es/';
    }
  } else {
    window.location = '/';
  }
}
