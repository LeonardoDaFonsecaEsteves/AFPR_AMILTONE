var nodemailer = require("nodemailer");
const auth = require("../../mail.leo");

exports.send_email = (user_mail, test_url) => {
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: auth.user,
      pass: auth.pass
    }
  });

  var mailOptions = {
    from: auth.user,
    to: user_mail,
    subject: "Test pour l'afpr amiltone",
    html: `<h1>Vous devez passer ce test</h1><a href="${test_url}">test afpr amiltone</a> `
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) throw err;
    else {
      console.log("Email sent: " + info.response);
    }
  });
};
