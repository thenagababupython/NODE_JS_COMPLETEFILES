const path = require('path');
// load body-parser module
const bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// persons store
let persons = [{"id":1,"first_name":"Hamnet","last_name":"Piel","email":"hpiel0@t-online.de","gender":"Male","ip_address":"68.91.27.46"},{"id":2,"first_name":"Borg","last_name":"Asee","email":"basee1@icq.com","gender":"Male","ip_address":"202.33.181.221"},{"id":3,"first_name":"Huntlee","last_name":"Dellar","email":"hdellar2@patch.com","gender":"Male","ip_address":"16.164.50.151"},{"id":4,"first_name":"Filide","last_name":"Warton","email":"fwarton3@slideshare.net","gender":"Female","ip_address":"184.48.44.17"},{"id":5,"first_name":"Harriett","last_name":"Clementucci","email":"hclementucci4@bing.com","gender":"Female","ip_address":"41.146.137.74"},{"id":6,"first_name":"Dniren","last_name":"Ebsworth","email":"debsworth5@reuters.com","gender":"Female","ip_address":"109.104.6.112"},{"id":7,"first_name":"Daniele","last_name":"Tome","email":"dtome6@wikimedia.org","gender":"Female","ip_address":"142.250.129.163"},{"id":8,"first_name":"Delaney","last_name":"Playford","email":"dplayford7@disqus.com","gender":"Male","ip_address":"96.136.29.39"},{"id":9,"first_name":"Patrizio","last_name":"Burwin","email":"pburwin8@surveymonkey.com","gender":"Male","ip_address":"67.227.109.81"},{"id":10,"first_name":"Giuseppe","last_name":"Caltera","email":"gcaltera9@cdbaby.com","gender":"Male","ip_address":"195.88.7.2"},{"id":11,"first_name":"Fred","last_name":"Gascoine","email":"fgascoinea@mayoclinic.com","gender":"Male","ip_address":"9.24.29.63"},{"id":12,"first_name":"Hartwell","last_name":"Enoksson","email":"henokssonb@answers.com","gender":"Male","ip_address":"105.178.62.170"},{"id":13,"first_name":"Milena","last_name":"Pavlasek","email":"mpavlasekc@diigo.com","gender":"Female","ip_address":"218.231.131.225"},{"id":14,"first_name":"Adriana","last_name":"Morando","email":"amorandod@google.cn","gender":"Female","ip_address":"25.142.195.237"},{"id":15,"first_name":"Arlin","last_name":"Smeed","email":"asmeede@soup.io","gender":"Male","ip_address":"120.63.174.43"},{"id":16,"first_name":"Missy","last_name":"Archibould","email":"marchibouldf@tmall.com","gender":"Female","ip_address":"134.185.131.48"},{"id":17,"first_name":"Siana","last_name":"Vamplus","email":"svamplusg@last.fm","gender":"Female","ip_address":"117.26.33.179"},{"id":18,"first_name":"Horst","last_name":"Marjanski","email":"hmarjanskih@nymag.com","gender":"Male","ip_address":"157.24.85.110"},{"id":19,"first_name":"Cindelyn","last_name":"Hanbridge","email":"chanbridgei@friendfeed.com","gender":"Female","ip_address":"0.157.31.117"},{"id":20,"first_name":"Andreas","last_name":"Bier","email":"abierj@i2i.jp","gender":"Male","ip_address":"246.90.73.203"},{"id":21,"first_name":"Eden","last_name":"Croose","email":"ecroosek@archive.org","gender":"Female","ip_address":"58.133.11.201"},{"id":22,"first_name":"Alaster","last_name":"Camps","email":"acampsl@vk.com","gender":"Male","ip_address":"249.44.73.81"},{"id":23,"first_name":"Emera","last_name":"Coltart","email":"ecoltartm@pcworld.com","gender":"Female","ip_address":"234.93.112.23"},{"id":24,"first_name":"Ash","last_name":"Vergo","email":"avergon@forbes.com","gender":"Male","ip_address":"22.125.148.212"},{"id":25,"first_name":"Garold","last_name":"Lyosik","email":"glyosiko@stumbleupon.com","gender":"Male","ip_address":"251.86.188.177"},{"id":26,"first_name":"Linell","last_name":"Rathbone","email":"lrathbonep@homestead.com","gender":"Female","ip_address":"121.184.241.43"},{"id":27,"first_name":"Theodore","last_name":"Cars","email":"tcarsq@wikispaces.com","gender":"Male","ip_address":"163.166.154.164"},{"id":28,"first_name":"Ellary","last_name":"Blesing","email":"eblesingr@wunderground.com","gender":"Male","ip_address":"207.133.96.124"},{"id":29,"first_name":"Nikolaos","last_name":"Burress","email":"nburresss@biblegateway.com","gender":"Male","ip_address":"220.124.176.30"},{"id":30,"first_name":"Glenda","last_name":"Pywell","email":"gpywellt@example.com","gender":"Female","ip_address":"53.105.81.74"},{"id":31,"first_name":"Euell","last_name":"Bonallack","email":"ebonallacku@cdbaby.com","gender":"Male","ip_address":"148.230.235.248"},{"id":32,"first_name":"Anissa","last_name":"Kincey","email":"akinceyv@tripadvisor.com","gender":"Female","ip_address":"168.92.42.173"},{"id":33,"first_name":"Scotty","last_name":"Carletti","email":"scarlettiw@unesco.org","gender":"Male","ip_address":"164.86.82.194"},{"id":34,"first_name":"Humberto","last_name":"Haversum","email":"hhaversumx@auda.org.au","gender":"Male","ip_address":"19.11.205.243"},{"id":35,"first_name":"Felicle","last_name":"Hierro","email":"fhierroy@meetup.com","gender":"Female","ip_address":"176.58.20.46"},{"id":36,"first_name":"Jonis","last_name":"Champneys","email":"jchampneysz@wp.com","gender":"Female","ip_address":"64.149.111.51"},{"id":37,"first_name":"Elihu","last_name":"Elms","email":"eelms10@addtoany.com","gender":"Male","ip_address":"132.202.110.250"},{"id":38,"first_name":"Flora","last_name":"Haggie","email":"fhaggie11@jugem.jp","gender":"Female","ip_address":"132.150.193.51"},{"id":39,"first_name":"Agace","last_name":"Gilgryst","email":"agilgryst12@mozilla.org","gender":"Female","ip_address":"237.167.194.113"},{"id":40,"first_name":"Augy","last_name":"Autin","email":"aautin13@amazon.de","gender":"Male","ip_address":"240.163.72.238"},{"id":41,"first_name":"Lucius","last_name":"Blasiak","email":"lblasiak14@cisco.com","gender":"Male","ip_address":"117.218.246.136"},{"id":42,"first_name":"Luis","last_name":"Georgeau","email":"lgeorgeau15@gmpg.org","gender":"Male","ip_address":"15.52.215.2"},{"id":43,"first_name":"Linnea","last_name":"Caskey","email":"lcaskey16@home.pl","gender":"Female","ip_address":"63.165.69.194"},{"id":44,"first_name":"Andros","last_name":"Szwarc","email":"aszwarc17@w3.org","gender":"Male","ip_address":"140.70.157.190"},{"id":45,"first_name":"Winne","last_name":"Hedon","email":"whedon18@uol.com.br","gender":"Female","ip_address":"76.68.90.228"},{"id":46,"first_name":"Tailor","last_name":"Arundel","email":"tarundel19@senate.gov","gender":"Male","ip_address":"138.163.67.249"},{"id":47,"first_name":"Moira","last_name":"Jeandeau","email":"mjeandeau1a@printfriendly.com","gender":"Female","ip_address":"152.104.90.231"},{"id":48,"first_name":"Hebert","last_name":"Bennell","email":"hbennell1b@forbes.com","gender":"Male","ip_address":"120.173.168.176"},{"id":49,"first_name":"Johannes","last_name":"Cathesyed","email":"jcathesyed1c@gizmodo.com","gender":"Male","ip_address":"235.136.94.76"},{"id":50,"first_name":"Sabra","last_name":"Rau","email":"srau1d@google.com.au","gender":"Female","ip_address":"207.24.242.218"},{"id":51,"first_name":"Dorine","last_name":"Gerriet","email":"dgerriet1e@desdev.cn","gender":"Female","ip_address":"136.218.174.64"},{"id":52,"first_name":"Valry","last_name":"Hullett","email":"vhullett1f@bloglovin.com","gender":"Female","ip_address":"219.62.159.139"},{"id":53,"first_name":"Yance","last_name":"Bolver","email":"ybolver1g@drupal.org","gender":"Male","ip_address":"231.130.88.171"},{"id":54,"first_name":"Robena","last_name":"Meedendorpe","email":"rmeedendorpe1h@rambler.ru","gender":"Female","ip_address":"46.204.217.134"},{"id":55,"first_name":"Melisande","last_name":"Derl","email":"mderl1i@psu.edu","gender":"Female","ip_address":"243.184.154.36"},{"id":56,"first_name":"Brucie","last_name":"Southerill","email":"bsoutherill1j@diigo.com","gender":"Male","ip_address":"173.185.249.204"},{"id":57,"first_name":"Trip","last_name":"Mathieson","email":"tmathieson1k@mlb.com","gender":"Male","ip_address":"168.212.32.228"},{"id":58,"first_name":"Gottfried","last_name":"Foulstone","email":"gfoulstone1l@noaa.gov","gender":"Male","ip_address":"243.213.43.117"},{"id":59,"first_name":"Wenonah","last_name":"Cogzell","email":"wcogzell1m@abc.net.au","gender":"Female","ip_address":"44.40.5.121"},{"id":60,"first_name":"Inness","last_name":"Kynnd","email":"ikynnd1n@technorati.com","gender":"Male","ip_address":"79.9.105.95"},{"id":61,"first_name":"Sherill","last_name":"Greenwood","email":"sgreenwood1o@illinois.edu","gender":"Female","ip_address":"46.214.75.208"},{"id":62,"first_name":"Douglas","last_name":"Shapcote","email":"dshapcote1p@vkontakte.ru","gender":"Male","ip_address":"50.233.148.212"},{"id":63,"first_name":"Shana","last_name":"Matteini","email":"smatteini1q@netscape.com","gender":"Female","ip_address":"157.236.242.233"},{"id":64,"first_name":"Marlena","last_name":"Kennsley","email":"mkennsley1r@quantcast.com","gender":"Female","ip_address":"249.241.198.163"},{"id":65,"first_name":"Sallyann","last_name":"Abraham","email":"sabraham1s@yelp.com","gender":"Female","ip_address":"235.0.236.212"},{"id":66,"first_name":"Tana","last_name":"Wavell","email":"twavell1t@moonfruit.com","gender":"Female","ip_address":"145.236.75.230"},{"id":67,"first_name":"Mavra","last_name":"Jobbins","email":"mjobbins1u@flavors.me","gender":"Female","ip_address":"189.252.55.47"},{"id":68,"first_name":"Ginnifer","last_name":"Puddifer","email":"gpuddifer1v@dmoz.org","gender":"Female","ip_address":"185.106.88.235"},{"id":69,"first_name":"Cristi","last_name":"Culy","email":"cculy1w@msn.com","gender":"Female","ip_address":"218.47.124.154"},{"id":70,"first_name":"Gussi","last_name":"Pentercost","email":"gpentercost1x@indiegogo.com","gender":"Female","ip_address":"217.193.99.26"},{"id":71,"first_name":"Ase","last_name":"Gutch","email":"agutch1y@usatoday.com","gender":"Male","ip_address":"64.33.61.60"},{"id":72,"first_name":"Bradford","last_name":"Stagge","email":"bstagge1z@whitehouse.gov","gender":"Male","ip_address":"99.61.87.195"},{"id":73,"first_name":"Marshall","last_name":"Pietrasik","email":"mpietrasik20@phoca.cz","gender":"Male","ip_address":"149.251.71.71"},{"id":74,"first_name":"Daloris","last_name":"McKag","email":"dmckag21@issuu.com","gender":"Female","ip_address":"222.207.182.128"},{"id":75,"first_name":"Husein","last_name":"Labin","email":"hlabin22@walmart.com","gender":"Male","ip_address":"63.179.240.137"},{"id":76,"first_name":"Bidget","last_name":"Bonnavant","email":"bbonnavant23@youtube.com","gender":"Female","ip_address":"115.188.127.91"},{"id":77,"first_name":"Nicol","last_name":"Bourbon","email":"nbourbon24@java.com","gender":"Male","ip_address":"182.118.228.5"},{"id":78,"first_name":"Athena","last_name":"McCandless","email":"amccandless25@canalblog.com","gender":"Female","ip_address":"249.180.234.3"},{"id":79,"first_name":"Tally","last_name":"MacWhirter","email":"tmacwhirter26@house.gov","gender":"Male","ip_address":"88.6.209.162"},{"id":80,"first_name":"Timothy","last_name":"Menaul","email":"tmenaul27@t.co","gender":"Male","ip_address":"18.45.124.180"},{"id":81,"first_name":"Kiersten","last_name":"Comberbach","email":"kcomberbach28@seattletimes.com","gender":"Female","ip_address":"77.195.88.168"},{"id":82,"first_name":"Norri","last_name":"Yarnton","email":"nyarnton29@dell.com","gender":"Female","ip_address":"19.103.159.22"},{"id":83,"first_name":"Obie","last_name":"Golly","email":"ogolly2a@army.mil","gender":"Male","ip_address":"76.194.119.33"},{"id":84,"first_name":"Cesare","last_name":"Hakonsson","email":"chakonsson2b@jalbum.net","gender":"Male","ip_address":"10.24.44.22"},{"id":85,"first_name":"Marylou","last_name":"Simmell","email":"msimmell2c@sfgate.com","gender":"Female","ip_address":"54.72.235.176"},{"id":86,"first_name":"Chrissie","last_name":"Eve","email":"ceve2d@ed.gov","gender":"Male","ip_address":"108.227.44.209"},{"id":87,"first_name":"Nikolos","last_name":"Blight","email":"nblight2e@eepurl.com","gender":"Male","ip_address":"11.84.159.82"},{"id":88,"first_name":"Brooke","last_name":"Lumsdon","email":"blumsdon2f@nhs.uk","gender":"Male","ip_address":"4.202.4.87"},{"id":89,"first_name":"Justen","last_name":"Tipple","email":"jtipple2g@stumbleupon.com","gender":"Male","ip_address":"181.244.106.17"},{"id":90,"first_name":"Christophe","last_name":"Kadar","email":"ckadar2h@ftc.gov","gender":"Male","ip_address":"178.9.33.157"},{"id":91,"first_name":"Caesar","last_name":"Glacken","email":"cglacken2i@chicagotribune.com","gender":"Male","ip_address":"203.41.52.13"},{"id":92,"first_name":"Tedman","last_name":"Mechell","email":"tmechell2j@addthis.com","gender":"Male","ip_address":"236.47.88.143"},{"id":93,"first_name":"Harry","last_name":"Farady","email":"hfarady2k@sun.com","gender":"Male","ip_address":"236.151.245.111"},{"id":94,"first_name":"Wrennie","last_name":"Nuschke","email":"wnuschke2l@geocities.com","gender":"Female","ip_address":"176.97.224.197"},{"id":95,"first_name":"Chickie","last_name":"Mac Giany","email":"cmacgiany2m@forbes.com","gender":"Male","ip_address":"24.100.192.89"},{"id":96,"first_name":"Charmaine","last_name":"Gayforth","email":"cgayforth2n@moonfruit.com","gender":"Female","ip_address":"119.250.255.85"},{"id":97,"first_name":"Philippine","last_name":"Coche","email":"pcoche2o@bloomberg.com","gender":"Female","ip_address":"45.210.169.139"},{"id":98,"first_name":"Archibaldo","last_name":"Grinov","email":"agrinov2p@stanford.edu","gender":"Male","ip_address":"67.233.197.202"},{"id":99,"first_name":"Timothee","last_name":"Nilles","email":"tnilles2q@phpbb.com","gender":"Male","ip_address":"94.120.140.22"},{"id":100,"first_name":"Rickert","last_name":"Stonestreet","email":"rstonestreet2r@go.com","gender":"Male","ip_address":"155.174.154.158"}];

let mapRoutes = (app) => {
    // Routing logic

    // for home page
    app.get('/',(req,res) => {
        res.sendFile(path.join(__dirname,'..','views','index.html'));
    });

// for About Us page
    app.get('/about',(req,res) => {
        res.sendFile(path.join(__dirname,'..','views','about.html'));
    });

// for Services page
    app.get('/services',(req,res) => {
        res.sendFile(path.join(__dirname,'..','views','services.html'));
    });

// for Profile page
    app.get('/profile',(req,res) => {
        res.sendFile(path.join(__dirname,'..','views','profile.html'));
    });

    // for GET -> with parameters
    app.get('/profile/:id',(req,res) => {
        let id = Number.parseInt(req.params.id);
        let selectedPerson  = persons.find((person) => {
            return person.id === id;
        });
        console.log(selectedPerson);
        res.sendFile(path.join(__dirname,'..','views','profile.html'));
    });

    // for Contact Us page with Query Strings
    app.get('/contact',(req,res) => {
        let query = req.query;
        console.log(query);
        res.sendFile(path.join(__dirname,'..','views','contact.html'));
    });

    // POST : for Feedback Form
    app.post('/feedback', urlencodedParser,(req,res) => {
        // logic to get form data
        let feedback = req.body;
        console.log(feedback);
        res.render(path.join(__dirname,'..','views','feedback-success.ejs'),{feedback : feedback});
    });


    // 404 page
    app.use((req,res) => {
        res.sendFile(path.join(__dirname,'..','views','404.html'));
    });
};

module.exports = {
    mapRoutes
};