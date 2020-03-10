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
    subject: "Test pour l'afpr",
    html: `<h1>Vous devez passer ce test</h1> <br /> <a href="${test_url}">test afpr amiltone</a> `
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
