const mongoose = require("mongoose");

// Encode credentials to handle special characters
const username = encodeURIComponent('shyamas2103');
const password = encodeURIComponent('SHYamas2103');

// Use MongoDB Atlas URL
const uri = `mongodb+srv://${username}:${password}@imaginify.chkit.mongodb.net/codeIDE?retryWrites=true&w=majority&appName=Imaginify`;

// Connect to MongoDB Atlas
mongoose.connect(uri, {})
.then(() => {
  console.log('MongoDB Atlas connected successfully!');
})
.catch(err => {
  console.error('MongoDB Atlas connection error:', err);
});

// Project schema
const projectSchema = new mongoose.Schema({
  title: String,
  createdBy: String,
  date: {
    type: Date,
    default: Date.now
  },
  htmlCode: {
    type: String,
    default: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
    
    </body>
    </html>`
  },
  cssCode: {
    type: String,
    default: `
    body{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }`
  },
  jsCode: {
    type: String,
    default: 'console.log("Hello World")'
  }
});

// Export the Project model
module.exports = mongoose.model("Project", projectSchema);
