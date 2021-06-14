const express = require('express');
const path = require('path');
//Init express
const app = express();

const members = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
    status: 'active'
  },
  {
    id: 2,
    name: 'Bob Williams',
    email: 'bob@gmail.com',
    status: 'inactive'
  },
  {
    id: 3,
    name: 'Shannon Jackson',
    email: 'shannon@gmail.com',
    status: 'active'
  }
];

app.use(express.static(path.join(__dirname, 'public')));

/* //creat your endpoints/route handlers
app.get('/', (req,res) => {
    //res.send('<h1>hello world</h1>');
    res.sendFile(path.join(__dirname, 'public','index2.html'));
}); */

//Get a single Member
app.get('/api/members/"id', (req,res)=>{
    res.json(members.filter(member => member.id == parseInt(req.params.id)));
})
//Gets All members
app.get('/api/members', (req,res)=> res.json(members));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log());
