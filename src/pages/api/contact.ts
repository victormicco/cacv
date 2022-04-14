import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(401).json({ message: "Invalid method" });
  } else if (!req.body.name) {
    return res.status(401).json({ message: "Name is missing" });
  } else if (!req.body.email) {
    return res.status(401).json({ message: "Email is missing" });
  } else if (!req.body.phone) {
    return res.status(401).json({ message: "Phone is missing" });
  } else if (!req.body.message) {
    return res.status(401).json({ message: "Message is missing" });
  } else {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      service: "gmail",
      auth: {
        user: "bagacera093@gmail.com",
        pass: process.env.NODEMAILER_PASSWORD,
      },
      secure: true,
    });
    const mailData = {
      from: `${req.body.email}`,
      to: "bagacera093@gmail.com",
      subject: `Mensagem do formulário enviada por: ${req.body.name}`,
      html: `<div>E-mail: ${req.body.email}</div><div>Telefone: ${req.body.phone}</div><div>Mensagem: ${req.body.message}</div>`,
    };

    await transporter.sendMail(mailData, (err, info) => {
      if (err) {
        return res.status(401).json({ message: err });
      } else {
        return res.status(200).json({ message: info });
      }
    });
  }
}
