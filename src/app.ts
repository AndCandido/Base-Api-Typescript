import Express from "express";
import router from "./routes";

const app = Express();
app.use(router);

export default app;
