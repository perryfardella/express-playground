import app from "./app";

// This file contains all the code that only runs once (on server start).
// Keeping the startup logic separate from the business logic (routes).

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});
