
var moment = require('moment');

var generateMessage = (from,text) =>{
  return {
    from,
    text,
    createdAt: moment().valueOf()
  };
};


var generatLocationMessage = (from, latitude, longitude) =>{
  return {
    from,
    url:`https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: moment().valueOf()
  };
};



module.exports = {generateMessage,generatLocationMessage};
