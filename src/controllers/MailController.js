/* eslint-disable no-console */
const mailgun = require('mailgun-js');

module.exports = {
  async sendEmail(req, res) {
    const
      {
        name, email, subject, message,
      } = req.body;

    const apiKey = process.env.MAILGUN_API_KEY;
    const domain = process.env.MAILGUN_DOMAIN;

    const mailer = mailgun({ apiKey, domain });
    const data = {
      from: `${name} <${email}>`,
      to: process.env.MAILGUN_RECIPIENT,
      subject,
      text: message,
    };

    await mailer.messages().send(data, (error, body) => {
      console.log(body);
    });

    return res.json({ message: 'E-mail enviado' });
  },
};
