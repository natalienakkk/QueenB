import { EntitySchema } from "typeorm";

export const Question = new EntitySchema({
  name: "Question", //the name of the table, not the database
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    questionType: {
      type: "varchar"
    },
    company: {
      type: "varchar"
    },
    jobType: {
      type: "varchar"
    },
    question: {
      type: "varchar"
    },
    difficulty: {
      type: "varchar"
    },
    scheduledTime: {
      type: "varchar"
    },
    time: {
      type: "varchar"
    }
  }
});


