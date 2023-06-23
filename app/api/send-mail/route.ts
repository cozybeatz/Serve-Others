import { NextRequest, NextResponse } from "next/server";
const nodemailer = require('nodemailer')

interface ApiResponse {
  message: string;
}

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { name, email, phone } = body;
  console.log(body);
  console.log(process.env.HOST, process.env.SMTP_USER, process.env.SMTP_PASS);
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    secure: true,
    port: 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
      minVersion: "TLSv1.2",
    },
  });

  const output = `
  <h3>New signup from serveothers.com website. Please view below</h3>
  <p>Fullname - ${name}</p>
  <p>Email - ${email}</p>
  <p>Phone - ${phone}</p>
`;

  const mailOption = {
    from: `"${name} via Serve Others" <${process.env.SMTP_USER}>`,
    to: [process.env.SMTP_USER, "cozybeatzinc@gmail.com"],
    subject: `${name} - New Sign Up From Serve Others Website`,
    text: ``,
    html: output,
  };

  try {
    const sent = await transporter.sendMail(mailOption);
    const response: ApiResponse = {
      message: "Successfully signed you up for Serve Others ✔"
    };
    console.log('successfully sent message to Serve Others ✔')
    return NextResponse.json(response, { status: 200 });
  } catch (err) {
    console.log(err);
    console.log("Couldn't send mail");
    const response: ApiResponse = {
      message: "Oops! Something went wrong, please try again"
    };
    console.log('Oops! Something went wrong, please try again')

    return NextResponse.json(response, { status: 500 });
  }
  
}