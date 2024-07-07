import "dotenv/config"
import db from "./mongo"
import defaults from "./note/utils/defaults";
import createServer from "./utils/server";

const PORT = process.env.PORT || 3001;
const DB_URI = <string>process.env.DB_URI || "mongodb://mongodb:27017/";

const app = createServer()

console.log('Connecting to Database');
console.log('PORT:', PORT);
console.log('DB_URI:', DB_URI);

db().then(()=> console.log('Connected to Database'));
app.listen(Number(PORT), '0.0.0.0', async () => {
  await defaults.create()
  console.log(`Server ready on PORT ${PORT}`);
});

