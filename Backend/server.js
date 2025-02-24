import { app } from "./app.js";
import { DBConnection } from "./src/database/db.js";

DBConnection()
  .then(() => {
    app.on("error", (error) => {
      console.error("Server Error:", error);
      process.exit(1);
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  });
