require('dotenv').config()
const nodemailer = require('nodemailer');

// let transporter = nodemailer.createTransport({   // https://www.youtube.com/watch?v=W3jGtgva46w
//   service: 'gmail',
//   auth: {
//     type: 'OAuth2',
//     user: process.env.MAIL_USERNAME,
//     clientId: process.env.OAUTH_CLIENTID,
//     clientSecret: process.env.OAUTH_CLIENT_SECRET,
//     refreshToken: process.env.OAUTH_REFRESH_TOKEN
//   }
// });

let transporter = nodemailer.createTransport({    // https://youtu.be/TvOfrZnaunQ?t=127
  host: "smtp.gmail.com",
  port: 465 ,
  secure: true,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.PASS,
  },
});

let mailOptions = {
  from:`"Mi app" <${process.env.MAIL_FROM}>` ,
  to: process.env.MAIL_TO,
  subject: 'Correo de verificación',
  text: 'Verifica tu email para usar la aplicacion'
};

transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    console.log("Error " + err);
  } else {
    console.log("Email sent successfully");
  }
});
