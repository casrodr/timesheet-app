const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//mongoose.connect(
  //"mongodb+srv://user123:Password123Tech@cluster0.l6kmbj8.mongodb.net/merntutorial?retryWrites=true&w=majority&appName=Cluster0"
//);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB database!");
});

// Connect to MongoDB
mongoose.connect('mongodb+srv://user123:Password123tech@cluster0.wnpmqy9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define routes
const timesheetRoutes = require('./routes/timesheetRoutes');
const lineItemRoutes = require('./routes/lineItemRoutes');

app.use('/api/timesheets', timesheetRoutes);
app.use('/api/lineitems', lineItemRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});