import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb";
const REGION = "ap-south-1";
const ddbClient = new DynamoDBClient({ region: REGION });

exports.handler = async (event, context, callback) => {
  const params = {
    Item: {
      ID: {
        S: "user_" + Math.random(),
      },
    },
    TableName: process.env.DynamoTable,
  };
  try {
    const data = await ddbClient.send(new CreateTableCommand(params));
    console.log("Table Created", data);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
