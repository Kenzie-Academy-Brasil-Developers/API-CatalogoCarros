import { app } from "./app";

export const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`API sucessfilly started at port ${port}`);
});

export { app };