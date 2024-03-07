import "reflect-metadata";
import { createConnection } from "typeorm";
import { Question } from './entity/Question.js';

async function initializeConnection(){
  try {
    const connection = await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "Nunu20001999",
      database: "postgres",
      entities: [
          Question
      ],
      synchronize: true, // set this to true only in development
      logging: true
    });
    console.log('Database connection established');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database', error);
    throw error;
  }

}

async function addQuestion(connection) {
  if (!connection) throw new Error("Connection must be established before adding a question.");
  const questionRepository = connection.getRepository('Question');

    let newQuestion = {
      questionType: 'interview question',
      company: 'Elbit',
      jobType: 'Backend software engineer',
      question: "Given two strings, you are required to compare them to determine if they contain exactly the same characters, but not necessarily in the same order.\n" +
          "\n" +
          "Initially, there are no constraints on space and runtime complexity. After providing an initial solution, a space complexity constraint will be introduced.",
      difficulty: 'Medium',
      scheduledTime: '15 minutes',
      time: 'one month ago'
  };

      // Create a new question instance
  // let newQuestion = {
  //     questionType: 'home assignment',
  //     company: 'Microsoft',
  //     jobType: 'Software engineer student',
  //     question: "Given a matrix with two rows, each cell contains a specific value. " +
  //   "You need to find the shortest path from the top-left cell to the bottom-right cell. " +
  //   "Movement is allowed only to the right or down. " +
  //   "The length of a path is determined by the cell with the highest value.",
  //     difficulty: 'Medium',
  //     scheduledTime: '30-40 minutes',
  //     time: 'one month ago'
  // };

  await questionRepository.save(newQuestion);
  console.log('New question saved', newQuestion);

}

export { initializeConnection, addQuestion };



