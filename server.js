const path = require('path');
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

// default options
app.use(fileUpload());
app.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  console.log(req.files);
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  // let sampleFile = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server
  // sampleFile.mv('/somewhere/on/your/server/filename.jpg', function(err) {
  //   if (err)
  //     return res.status(500).send(err);

  //   res.send('File uploaded!');
  // });
  res.send('File uploaded!')
});


app.use(express.static(__dirname + '/public'));

app.listen(3000, err => {
  if (err) {
    console.log({ err }, `Failed to listen on port 3000: ${err.message}`);

    return process.exit(1);
  }

  console.log(`Listening on port 3000 ...`);
});

