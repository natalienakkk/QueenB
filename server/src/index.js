import { initializeConnection , addQuestion } from './AddQuestionManually.js';

initializeConnection().then(async connection => {
    console.log('Now connected to the database, server can start...');
    await addQuestion(connection);

}).catch(error => {
    console.error('Failed to initialize the database connection or add a question', error);
});

