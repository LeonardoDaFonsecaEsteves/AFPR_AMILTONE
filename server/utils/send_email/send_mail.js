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
  console.log(test_url);

  var mailOptions = {
    from: auth.user,
    to: user_mail,
    subject: "Test pour l'afpr",
    html: `   <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tbody>
      <tr>
        <td align="center" bgcolor="#2A374E">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr>
                <td class="w640" width="640" height="10"></td>
              </tr>

              <tr></tr>
              <tr>
                <td class="w640" width="640" height="10"></td>
              </tr>

              <!-- entete -->
              <tr class="pagetoplogo">
                <td class="w640" width="640">
                  <table
                    class="w640"
                    width="640"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    bgcolor="#F2F0F0"
                  >
                    <tbody>
                      <tr>
                        <td class="w30" width="30"></td>
                        <td
                          class="w580"
                          width="580"
                          valign="middle"
                          align="left"
                        >
                          <div class="pagetoplogo-content">
                            <img
                              class="w580"
                              style="text-decoration: none; display: block; color:#145ac1; font-size:30px;"
                              src="../../client/src/img/LogoAmiltone.svg"
                              alt="Logo"
                              width="482"
                              height="108"
                            />
                          </div>
                        </td>
                        <td class="w30" width="30"></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>

              <!-- separateur horizontal -->
              <tr>
                <td
                  class="w640"
                  width="640"
                  height="1"
                  bgcolor="#d7d6d6"
                ></td>
              </tr>

              <!-- contenu -->
              <tr class="content">
                <td class="w640" class="w640" width="640" bgcolor="#ffffff">
                  <table
                    class="w640"
                    width="640"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                  >
                    <tbody>
                      <tr>
                        <td class="w30" width="30"></td>
                        <td class="w580" width="580">
                          <!-- une zone de contenu -->
                          <table
                            class="w580"
                            width="580"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td class="w580" width="580">
                                  <h2
                                    style="color:#0E7693; font-size:22px; padding-top:12px;"
                                  >
                                    Test AFPR
                                  </h2>

                                  <div align="left" class="article-content">
                                    <p>
                                      Vous allé passé un test afpr sur vos
                                      connaisance en devloppement web
                                    </p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  class="w580"
                                  width="580"
                                  height="1"
                                  bgcolor="#c7c5c5"
                                ></td>
                              </tr>
                            </tbody>
                          </table>
                          <!-- fin zone -->
                        </td>
                        <td class="w30" class="w30" width="30">
                        <button> <a href=${test_url}>passée le test</a></button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>

              <!--  separateur horizontal de 15px de  haut-->
              <tr>
                <td
                  class="w640"
                  width="640"
                  height="15"
                  bgcolor="#ffffff"
                ></td>
              </tr>

              <!-- pied de page -->
              <tr class="pagebottom">
                <td class="w640" width="640">
                  <table
                    class="w640"
                    width="640"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    bgcolor="#c7c7c7"
                  >
                    <tbody>
                      <tr>
                        <td colspan="5" height="10"></td>
                      </tr>
                      <tr>
                        <td class="w30" width="30"></td>
                        <td class="w580" width="580" valign="top">
                          <p align="right" class="pagebottom-content-left">
                            <a
                              style="color:#255D5C;"
                              href="www.alsacreations.com"
                              ><span style="color:#255D5C;"
                                >Créé Nicolas & Leonardo</span
                              ></a
                            >
                          </p>
                        </td>

                        <td class="w30" width="30"></td>
                      </tr>
                      <tr>
                        <td colspan="5" height="10"></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td class="w640" width="640" height="60"></td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
