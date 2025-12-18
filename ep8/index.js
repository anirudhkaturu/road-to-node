// https://www.youtube.com/watch?v=Nt-AsZh5woE&list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo&index=8

/*

BASIC STRUCTURE OF A URL (Uniform Resource Locator)

1. protocol: https
2. domain: www.youtube.com (understandable ip addres text form)
3. path: /watch
4. query parameters: v=Nt-AsZh5woE, list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo, index=8 (seperated with '&')

Query Paramaeter: key-value pairs that can be appended to the end of a url for passing additional, optional information like search options and filters

*/

import http from 'http';
import fs from "fs";
import url from "url";

const server = http.createServer((req, res) => {
    const timestamp = Date.now();
    const date = new Date(timestamp);
    
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString();
    const day = date.getDate().toString();

    const hrs = date.getHours().toString();
    const mins = date.getMinutes().toString();
    const sec = date.getSeconds().toString();

    if (req.url == "/favicon.ico") { // to avoid "/favicon" route in log file
            return res.end();
    }
    
    const parsed_url = url.parse(req.url, true); // to parse the url 

    const formattedDate = `${year}/${month}/${day}-${hrs}:${mins}:${sec} - ${parsed_url.path}`;
    fs.appendFile("logFile.txt", formattedDate + "\n", (err) => {

        switch (parsed_url.pathname) {
            case "/":
                res.end("HOME PAGE");
                break;
            
            case "/about":
                res.end("ABOUT PAGE");
                break;

            case "/contact-us":
                res.end("CONTACT PAGE");
                break;

            case "/users":
                const user_name = parsed_url.query.u;
                res.end(`Welcome Back, ${user_name}`);
                break;

            default:
                res.end("404: NOT FOUND");
                break;
        }

        if (err) {
            console.log(err);
        }
    });
});

let PORT = 8000;
server.listen(PORT, () => {
    console.log(`Sever Running on: http://localhost:${PORT}`);
});