import fs from 'fs'
import nodemailer from 'nodemailer'
import path from 'path'
import Handlebars from 'handlebars'

import environment from '../env'

const transportConfig = {
  host: environment.EMAIL_HOST,
  port: environment.EMAIL_PORT,
  secure: environment.EMAIL_SECURE === 'true',
  requireTLS: environment.EMAIL_REQUIRE_TLS === 'true',
  ...(environment.EMAIL_CRT ? {
    tls: {
      ca: fs.readFileSync(environment.EMAIL_CRT)
    }
  } : undefined),
  auth: {
    user: environment.EMAIL_USERNAME,
    pass: environment.EMAIL_PASSWORD
  }
}

const transporter = nodemailer.createTransport(transportConfig)

const TEMPLATE_CACHE = {}

export default function ({ from = environment.EMAIL_FROM, to, bcc, subject, attachments }, templateName, variables) {
  let template = TEMPLATE_CACHE[templateName]

  if (!template) {
    const templateString = fs.readFileSync(path.resolve(__dirname, `./templates/${templateName}.hbs`), 'utf8')
    template = Handlebars.compile(templateString)
    TEMPLATE_CACHE[templateName] = template
  }

  return sendMail({
    from,
    to,
    bcc,
    subject,
    html: template(variables),
    attachments
  })
}

function sendMail (mailOptions) {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error)

        return reject(error)
      }

      if (environment.EMAIL_HOST === 'smtp.ethereal.email') {
        console.info('Preview URL: %s', nodemailer.getTestMessageUrl(info))
      }

      return resolve(info)
    })
  })
}

transporter.verify(function (error, success) {
  if (error) {
    console.error(error)
  } else {
    console.info('SMTP server is ready to take our messages')
  }
})
