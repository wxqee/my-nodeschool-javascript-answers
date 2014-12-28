module.exports = function (userList) {
  return function (targetUserList) {
    return targetUserList.every(function (item, index, array) {
      return userList.some(function (itemV, indexV, arrayV) {
        return itemV.id === item.id;
      });
    });
  };
};

