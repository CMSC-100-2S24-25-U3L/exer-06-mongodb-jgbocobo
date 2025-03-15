import needle from 'needle';

needle.post('http://localhost:4000/save-student', {
    stdnum: "1010",
    fname: "Mary Jane",
    lname: "Watson",
    age: 23
}, (err, res) => {
    if (err) console.error(err);
    console.log(res.body);
});

needle.post('http://localhost:4000/save-student', {
    stdnum: "1011",
    fname: "John",
    lname: "Doe",
    age: 21
}, (err, res) => {
    if (err) console.error(err);
    console.log(res.body);
});

needle.post('http://localhost:4000/save-student', {
    stdnum: "1012",
    fname: "Alice",
    lname: "Johnson",
    age: 25
}, (err, res) => {
    if (err) console.error(err);
    console.log(res.body);
});

needle.post('http://localhost:4000/save-student', {
    stdnum: "1013",
    fname: "Robert",
    lname: "Smith",
    age: 22
}, (err, res) => {
    if (err) console.error(err);
    console.log(res.body);
});

needle.post('http://localhost:4000/save-student', {
    stdnum: "1014",
    fname: "Emily",
    lname: "Davis",
    age: 24
}, (err, res) => {
    if (err) console.error(err);
    console.log(res.body);
});

// Update user
needle.post('http://localhost:4000/update', {
    fname: "Mary Jane",  
    newFname: "Mary",    
    newLname: "Parker"   
}, (err, res) => {
    if (err) console.error(err);
    console.log('Update Student:', res.body);
});

// Remove a specific user
needle.post('http://localhost:4000/remove-user', {
    stdnum: "1010"
}, (err, res) => {
    if (err) console.error(err);
    console.log('Remove User:', res.body);
});

// Remove all users
needle.post('http://localhost:4000/remove-all-user', {}, (err, res) => {
    if (err) console.error(err);
    console.log('Remove All Users:', res.body);
});

// Get all users
needle.get('http://localhost:4000/members', (err, res) => {
    if (err) console.error(err);
    console.log('All Members:', res.body);
});

// Get user using stdnum
needle.get('http://localhost:4000/user?stdnum=1011', (err, res) => {
    if (err) console.error(err);
    console.log('Find User:', res.body);
});