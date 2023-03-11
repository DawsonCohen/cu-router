if(!hostname.includes("ezproxy.cul.columbia.edu")) {
  let new_url = new URL("https://"+ hostname.split('.').join('-') +".ezproxy.cul.columbia.edu");
  new_url.pathname = old_url.pathname;
  new_url.search = old_url.search;

  window.location.href = new_url.href;
}