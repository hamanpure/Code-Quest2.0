// importing express
const express = require('express');
const app = express();
// importing the mysql module - es6 features?
var mysql = require('mysql');
var path = require('path');
const cors=require("cors");
const { Console } = require('console');
const corsOptions={
	origin:"*",
	credentials:true
}
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Interstellar123$",
  database: "checkbook"
});
// app.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Methods', '*');
// 	res.header('Access-Control-Allow-Headers', '*');
// 	next();
//   });
// es6 function - arrow functions
con.connect((error)=>{
	if(error) {
		console.log(error);
	} else {
		console.log('Database Connected Successfully..!!');
	}
});



function generateUniqueId(callback) {
	const query = 'SELECT MAX(INCOME_HEAD_ID) as maxId FROM INCOME_HEAD';
	con.query(query, (err, results) => {
	  if (err) {
		console.error('MySQL query error:', err);
		callback(err, null);
	  } else {
		const maxId = results[0].maxId;
		const newId = maxId !== null ? maxId + 1 : 1;
		callback(null, newId);
	  }
	});
  }




 app.post('/homepage/inc',(req,res)=>{
// 	console.log(req.body)
    const income_name = req.body.income_name;
 	const income_desc = req.body.income_desc;
    const frequency = req.body.frequency;

	generateUniqueId((err, newId) => {
		if (err) {
		  return res.status(500).json({ message: 'Internal server error' });
		}
	
		const temp_query = 'INSERT INTO INCOME_HEAD(INCOME_HEAD_ID, INCOME_HEAD_NAME, INC_DESC, FREQUENCY) VALUES (?,?,?,?)';
		con.query(temp_query, [newId, income_name, income_desc, frequency], (err, results) => {
		  if (err) {
			console.error('MySQL query error:', err);
			return res.status(500).json({ message: 'Internal server error' });
		  }
	
		  res.json({ message: 'Income added successfully' });
		});
	  });
	});



	function generateUniqueId2(callback) {
	const query = 'SELECT MAX(EXPENSE_HEAD_ID) as maxId FROM EXPENSE_HEAD';
	con.query(query, (err, results) => {
		if (err) {
		console.error('MySQL query error:', err);
		callback(err, null);
		} else {
		const maxId = results[0].maxId;
		const newId = maxId !== null ? maxId + 1 : 201;
		callback(null, newId);
		}
	});
	}





app.post('/homepage/exp',(req,res)=>{
// 	console.log(req.body)
	const expense_name = req.body.expense_name;
	const expense_desc = req.body.expense_desc;
	const frequency2 = req.body.frequency;

	generateUniqueId2((err, newId) => {
		if (err) {
			return res.status(500).json({ message: 'Internal server error' });
		}
	
		const temp_query = 'INSERT INTO EXPENSE_HEAD(EXPENSE_HEAD_ID, EXPENSE_HEAD_NAME, EXP_DESC, FREQUENCY) VALUES (?,?,?,?)';
		con.query(temp_query, [newId, expense_name, expense_desc, frequency2], (err, results) => {
			if (err) {
			console.error('MySQL query error:', err);
			return res.status(500).json({ message: 'Internal server error' });
			}
	
			res.json({ message: 'Income added successfully' });
		});
		});

	});
	function generateUniqueId3(callback) {
		const query = 'SELECT MAX(EXPENSE_ID) as maxId FROM EXPENSE';
		con.query(query, (err, results) => {
		  if (err) {
			console.error('MySQL query error:', err);
			callback(err, null);
		  } else {
			const maxId = results[0].maxId;
			const newId = maxId !== null ? maxId + 1 : 401;
			callback(null, newId);
		  }
		});
	  }
	  
	  app.post('/homepage/exp/user', (req, res) => {
		const expense_date = req.body.expense_date;
		const expense_amount = req.body.expense_amount;
		const expense_desc = req.body.expense_desc;
		const user_exp_name = req.body.user_exp_name;
	  
		generateUniqueId3((err, newId) => {
		  if (err) {
			return res.status(500).json({ message: 'Internal server error' });
		  }
	  
		  const query = `SELECT EXPENSE_HEAD_ID FROM EXPENSE_HEAD WHERE EXPENSE_HEAD_NAME = ?`;
		  con.query(query, [user_exp_name], (err, results) => {
			if (err) {
			  console.error('MySQL query error:', err);
			  return res.status(500).json({ message: 'Internal server error' });
			}
	  
			const req_id = results[0].EXPENSE_HEAD_ID; // Access the specific value from the query results
	  
			const temp_query = 'INSERT INTO EXPENSE(EXPENSE_ID, EXPENSE_DATE, EXPENSE_AMOUNT, EXPENSE_DESC, EXPENSE_HEAD_ID) VALUES (?,?,?,?,?)';
			con.query(temp_query, [newId, expense_date, expense_amount, expense_desc, req_id], (err, results) => {
			  if (err) {
				console.error('MySQL query error:', err);
				return res.status(500).json({ message: 'Internal server error' });
			  }
	  
			  res.json({ message: 'Expense added successfully' });
			});
		  });
		});
	  });
	  function generateUniqueId4(callback) {
		const query = 'SELECT MAX(INCOME_ID) as maxId FROM INCOME';
		con.query(query, (err, results) => {
		  if (err) {
			console.error('MySQL query error:', err);
			callback(err, null);
		  } else {
			const maxId = results[0].maxId;
			const newId = maxId !== null ? maxId + 1 : 801;
			callback(null, newId);
		  }
		});
	  }
	  
	  app.post('/homepage/inc/user', (req, res) => {
		const income_date = req.body.income_date;
		const income_amount = req.body.income_amount;
		const income_desc = req.body.income_desc;
		const user_inc_name = req.body.user_inc_name;
	  
		generateUniqueId4((err, newId) => {
		  if (err) {
			return res.status(500).json({ message: 'Internal server error' });
		  }
	  
		  const query = `SELECT INCOME_HEAD_ID FROM INCOME_HEAD WHERE INCOME_HEAD_NAME = ?`;
		  con.query(query, [user_inc_name], (err, results) => {
			if (err) {
			  console.error('MySQL query error:', err);
			  return res.status(500).json({ message: 'Internal server error' });
			}
	  
			const req_id = results[0].INCOME_HEAD_ID; // Access the specific value from the query results
	  
			const temp_query = 'INSERT INTO INCOME(INCOME_ID, INCOME_DATE, INCOME_AMOUNT, INCOME_DESC, INCOME_HEAD_ID) VALUES (?,?,?,?,?)';
			con.query(temp_query, [newId, income_date, income_amount, income_desc, req_id], (err, results) => {
			  if (err) {
				console.error('MySQL query error:', err);
				return res.status(500).json({ message: 'Internal server error' });
			  }
	  
			  res.json({ message: 'Income added successfully' });
			});
		  });
		});
	  });
	  


	


	

	app.listen(5503, () => {
		console.log('Server is running on port 5503');
	  });

	  //





