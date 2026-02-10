function FindProxyForURL(url, host)
{

if (shExpMatch (url, "*tiktok.com*")){ 
 return "PROXY 127.0.0.1:8080; PROXY :3128";
}
if (dnsDomainIs (host, "blackberry.com")){ 
 return "NATIVE";
}
if (dnsDomainIs (host, ".example.com")){ 
 return "BLOCK";
}
  
//redirect on http page
if (shExpMatch (url, "*domain123.example.net*")){ 
 return "BLOCK http://domain1.example.org/";
}

return "DIRECT"; 
}