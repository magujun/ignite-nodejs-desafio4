import { app } from '.';

const PORT = 3333;

app.get('/', (request, response) => response.json({ message: '⚡ Node server is running on port: ' + PORT + ' ⚡' }));

app.listen(PORT, () => console.log('⚡Node server is running on port: ' + PORT + ' ⚡'));
