const dotenv = require("dotenv");
const EmailManager = require('../lib/EmailManager');
dotenv.config();

let emailConfig = {
  from: {
    "email": process.env.FROM_EMAIL,
    "name": process.env.FROM_EMAIL_NAME,
  },
  subject: process.env.EMAIL_SUBJECT
};

let getContactOrgEmail = function(args) {
  emailConfig.html = getBody(args);
  emailConfig.to = process.env.FROM_EMAIL;
  return emailConfig;
};

function getBody(args) {
  return EmailManager.getContactEmailHtml(args);
}

module.exports = getContactOrgEmail;
