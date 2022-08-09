function getIP(json) {
    document.write("Your ip: "json.ip);
}
<script src="https://api.ipify.org?format=jsonp&callback=getIP"></script> 
