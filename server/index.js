const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config({path: '.env'});

// Create Express app
const app = express();
app.use(express.json());
// Enable CORS
app.use(cors());


app.get('/api/message', (req, res) => {
  res.send('Hello, world!');
});
app.post('/api/message', (req, res) => {
  //logic for messeage sending
  const { fname, lname, email, number, message } = req.body;
  console.log({ fname, lname, email, number, message })
  // Send a response back to the client
  res.json({ message: 'Login successful' });
});



// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




/*
my-app/
├── client/
│   ├── public/
│   │   ├── index.html
│   │   └── ...
│   └── src/
│       ├── components/
│       │   ├── Home.js
│       │   └── ...
│       ├── App.js
│       ├── index.js
│       └── ...
├── server/
│   ├── controllers/
│   │   ├── userController.js
│   │   └── ...
│   ├── models/
│   │   ├── User.js
│   │   └── ...
│   ├── routes/
│   │   ├── userRoutes.js
│   │   └── ...
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── ...
│   ├── config/
│   │   └── db.js
│   ├── app.js
│   └── ...
├── .gitignore
└── package.json
*/

/*
<div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                  <p className="text-blk input-title">
                    Phone No.
                  </p>
                  <input
                    className="input"
                    type="text"
                    value={number}
                    id="ijowk-4"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
          <textarea
    className="textinput"
    id="i5vyy-4"
    placeholder="Write your message..."
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    />
 */