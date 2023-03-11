let host_map = {
    "ieeexplore.ieee.org" : "ieeexplore-ieee-org.ezproxy.cul.columbia.edu",
    "www.spiedigitallibrary.org" : "www-spiedigitallibrary-org.ezproxy.cul.columbia.edu",
    "direct.mit.edu" : "direct-mit-edu.ezproxy.cul.columbia.edu",
    "www.nature.com" : "www-nature-com.ezproxy.cul.columbia.edu",
    "journals.aps.org" : "journals-aps-org.ezproxy.cul.columbia.edu",
    "www.liebertpub.com" : "www-liebertpub-com.ezproxy.cul.columbia.edu",
}

let old_url = new URL(window.location.href);
let hostname = old_url.hostname;

if((hostname in host_map)) {

    let new_host = host_map[hostname];
    let new_url = new URL("https://"+new_host);
    new_url.pathname = old_url.pathname;
    new_url.search = old_url.search;

    window.location.href = new_url.href;

}