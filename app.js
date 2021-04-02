//core modules : FS

const fs = require('fs');

/*
//read & Write a file sync
let fileContent = fs.readFileSync('file.txt' , 'utf-8');
console.log(fileContent);

*/
//write to  a file in sync way

/*
let newFileContent = `This is the new content : ${fileContent}`;
fs.writeFileSync(`welcome.txt`, newFileContent, 'utf-8');
console.log('data is written');

*/
/*

//READ FILE CONTENT IN ASYNC WAY
fs.readFile('welcome.txt', 'utf-8' , (err, data) => {
    if(err) throw err;
    fs.writeFile('data.txt', data, 'utf-8', (err) => {
        if(err) throw err;
        console.log('data is written to a file data.txt');
    });
});
console.log('async test');
*/

//JSON file with content (JSON data from the website https://mockaroo.com/  for JSON validation : - json validaton online)
//to convert data in json file OBJect -> .json file -> convert to JSON string -> JSON.stringify(obj)
//                                                                             -> JSON.parse(String)

let employees = [[{"id":1,"first_name":"Ivette","last_name":"Marcoolyn","email":"imarcoolyn0@wikia.com","gender":"Polygender","ip_address":"31.238.181.107"},
    {"id":2,"first_name":"Sharyl","last_name":"Devitt","email":"sdevitt1@bloomberg.com","gender":"Male","ip_address":"213.235.61.238"},
    {"id":3,"first_name":"Stephannie","last_name":"McKmurrie","email":"smckmurrie2@blogger.com","gender":"Agender","ip_address":"138.90.181.32"},
    {"id":4,"first_name":"Caty","last_name":"Songhurst","email":"csonghurst3@deviantart.com","gender":"Genderqueer","ip_address":"208.200.178.102"},
    {"id":5,"first_name":"Rozella","last_name":"Woodrow","email":"rwoodrow4@typepad.com","gender":"Polygender","ip_address":"88.132.28.63"},
    {"id":6,"first_name":"Rafe","last_name":"Neeves","email":"rneeves5@i2i.jp","gender":"Agender","ip_address":"131.79.116.40"},
    {"id":7,"first_name":"Maxy","last_name":"Liddall","email":"mliddall6@msu.edu","gender":"Genderfluid","ip_address":"83.159.121.79"},
    {"id":8,"first_name":"Lorenza","last_name":"Guyton","email":"lguyton7@spiegel.de","gender":"Genderfluid","ip_address":"180.66.27.166"},
    {"id":9,"first_name":"Jodi","last_name":"Aughton","email":"jaughton8@census.gov","gender":"Genderfluid","ip_address":"156.228.239.44"},
    {"id":10,"first_name":"Kippie","last_name":"Reinhardt","email":"kreinhardt9@pinterest.com","gender":"Agender","ip_address":"150.148.208.68"}]];

fs.writeFile('employees.json' , JSON.stringify(employees), 'utf-8', (err) => {
if(err) throw err;
console.log('JSON data is written to a file');
});

//read from JSON file Async way

fs.readFile('employees.json' , 'utf-8' , (err, data) => {
if(err) throw err;
let employees = JSON.parse(data);
console.log(employees);
});