import axios from "axios";
import { config as dotenvConfig } from "dotenv";
const enableCORS = require("./lib/enable-cors");
const sendEmail = require("./lib/send-email");

const getContactOrgEmail = require("./email/get-contact-org-email");

dotenvConfig();

exports.handler = enableCORS(async (event, context, callback) => {
  try {
    let emailConfig = JSON.parse(event.body);
    let contactOrgEmail = getContactOrgEmail(emailConfig);
    sendEmail(contactOrgEmail).then(
      () => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            success: true
          })
        });
      },
      msg => {
        callback(null, {
          statusCode: 422,
          body: JSON.stringify({
            success: false,
            message: msg
          })
        });
      }
    );
  } catch (err) {
    console.log(err);
    callback(null, {
      statusCode: 500,
      body: JSON.stringify(err)
    });
  }
});
