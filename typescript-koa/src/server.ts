import app from './app/app';

const PORT:number = Number(process.env.PORT) || 3000;

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));