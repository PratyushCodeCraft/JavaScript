const { isUtf8 } = require('buffer')
const fs = require('fs')
const http = require('http');
// const fs = require('fs');

// // const server = http.createServer((req, res) => {
//   fs.readFile('example.txt', 'utf-8', (err, data) => {
//     if (err) {
//       console.error('Error reading file:', err);
      
//     //   res.writeHead(500, { 'Content-Type': 'text/plain' });
//       res.end('Error reading file.');
//     } else {
//       // Send the file content as the response
//     //   res.writeHead(200, { 'Content-Type': 'text/plain' });
//     console.log("successfully read data")
//       res.end(data);

//       server.close(() => {
//         console.log('Server closed gracefully.', new Date);
//       });

//     }
//   });
// });

// server.listen(5000, () => {
//   console.log('Server listening on port 5000');
// });
// // fs.writeFile(filename, content, callbacak funtion)
// // fs.writeFile('example.txt', "hello this is my second file txt file", (err) => {

// //     if(err){
// //         console.log("i am getting error",  err)
// //     }
// //     else {
// //         console.log('congratulation you successfully write your content ')
// //     }
// // })



// fs.readFile('example.txt', 'utf-8', (err, data) => {
//     if(err) {
//         console.log('uff, i am getting err', err)
//     } else {
//         console.log('wow i successfully read data from file: ', data)
//     }
// })


try {
    const data = fs.readFileSync('example.txt', 'utf-8');
    console.log('Data:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }

console.log('hello from after reading file')