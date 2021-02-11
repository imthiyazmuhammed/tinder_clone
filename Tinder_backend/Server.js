import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbcards.js';
import Cors from 'cors';

//app config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
	'mongodb+srv://admin:<Jp9AQgVM9Jk33cf>@cluster0.wd7x9.mongodb.net/<tinderdb>?retryWrites=true&w=majority';

//middleWares
app.use(express.json());
app.use(Cors());

//db config
mongoose.connect(connection_url, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

//API endpoints
app.get('/', (req, res) => res.status(200).send('hello world'));

app.post("/tinder/cards", (req, res) => {
	const dbCard = req.body;
	Cards.create(dbCard, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});

app.get('/tinder/cards', (req, res) => {
	Cards.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

//Listener
app.listen(port, () => console.log(`listening to the port: ${port}`));
