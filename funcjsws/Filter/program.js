module.exports = function (messages) {
  return messages
  .filter(function (msg) {
    return msg.message.length < 50;
  })
  .map(function (msg) {
    return msg.message;
  });
};
