// src/createTodo.js
import { SQS } from 'aws-sdk';

export const handler = async (event) => {
  const sqs = new SQS();

  const payload = event.body || '';

  await sqs
    .sendMessage({
      QueueUrl: process.env.QUEUE_URL,
      MessageBody: payload,
    })
    .promise();

  return {
    statusCode: 200,
  };
};
