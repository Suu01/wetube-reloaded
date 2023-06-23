import "./db";
import app from "./server";
import "./models/Video";
import "./models/User";

const PORT = 4000;

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
