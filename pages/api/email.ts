// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

import { FormType } from "../../utils/Types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body.body;
  const form: FormType = body.form as FormType;
  const output = `
  <div style="background-color: black; color: white; padding: 32px;">
  <h1 style="color: #dd2c18;">New QAS Quote</h1>
  <h2>Contact Details: </h2>
  <ul>
      <li style="margin-bottom:12px;"><b>Name: ${form.firstName} ${form.lastName}</b></li>
      <li style="margin-bottom:12px;"><b>Reference: ${form.reference}</b></li>
      <li style="margin-bottom:12px;"><b>Address: 
          <ul>
              <li><b>${form.address}</b></li>
          </ul>
      </li>
      <li style="margin-bottom:12px;"><b>Email: ${form.email}</b></li>
      <li style="margin-bottom:12px;"><b>Phone: ${form.mobile}</b></li>
      <li style="margin-bottom:12px;"><b>Enquiring about: ${form.truck}</b></li>
      <li style="margin-bottom:12px;"><b>Financing: ${form.financing}</b></li>
  </ul>
  </div>`;
  console.log(process.env.EMAIL_USER);
  console.log(process.env.EMAIL_PASSWORD);
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const receivers = [
    process.env.SEND_TO_EMAIL,
    form.email,
    "jakubednarz1@gmail.com",
  ];
  let mailoptions = {
    from: "Quote <qualityautoservicesshop@gmail.com>",
    to: receivers,
    subject: `QAS Shop Quote: ${form.firstName} ${form.lastName}`,
    text: "New Quote",
    html: output,
  };
  transporter.sendMail(mailoptions, (error: any, info: any) => {
    if (error) {
      res.status(400).json({ message: "Error" });
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ message: "Success!" });
  });
}
