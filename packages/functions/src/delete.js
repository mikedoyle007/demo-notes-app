import { Table } from 'sst/node/table';
import handler from '@notes/core/handler';
import dynamoDb from '@notes/core/dynamodb';

export const main = handler(async (event) => {
  const params = {
    TableName: Table.Notes.tableName,
    // 'Key' defines the partition key and sort key of the item to be updated
    Key: {
      userId: '123', // The id of the author
      noteId: event.pathParameters.id, // The id of the note from the path
    },
  };

  await dynamoDb.delete(params);

  return { status: true };
});

