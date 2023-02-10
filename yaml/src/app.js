const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB({
  region: "ap-south-1",
  apiVersion: "2012-08-10",
});

exports.fn = (event, context, callback) => {
  const params = {
    Item: {
      ID: {
        S: "user_" + Math.random(),
      },
    },
    TableName: process.env.TableName,
  };
  dynamoDB.putItem(params, function (err, data) {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      console.log(data);
      callback(null, data);
    }
  });
};
