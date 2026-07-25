import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const answersHtml = body.answers
      .map(
        (item: any, index: number) => `
        <tr>
          <td style="padding:10px;border:1px solid #ddd;">
            ${index + 1}
          </td>

          <td style="padding:10px;border:1px solid #ddd;">
            ${item.question}
          </td>

          <td style="padding:10px;border:1px solid #ddd;">
            ${item.answer}
          </td>
        </tr>
      `
      )
      .join("");

    const html = `
    <div
      style="
        font-family:Arial;
        max-width:700px;
        margin:auto;
        padding:20px;
      "
    >

      <h1>🎂 Birthday Website Response</h1>

      <p>
        Someone completed the birthday game.
      </p>

      <hr/>

      <p>

      <strong>Name:</strong>

      ${body.name}

      </p>

      <p>

      <strong>Time:</strong>

      ${new Date().toLocaleString()}

      </p>

      <table
        style="
          border-collapse:collapse;
          width:100%;
        "
      >

      <thead>

      <tr>

      <th
      style="border:1px solid #ddd;padding:10px;"
      >
      #
      </th>

      <th
      style="border:1px solid #ddd;padding:10px;"
      >
      Question
      </th>

      <th
      style="border:1px solid #ddd;padding:10px;"
      >
      Answer
      </th>

      </tr>

      </thead>

      <tbody>

      ${answersHtml}

      </tbody>

      </table>

      <br/>

      <p>

      ❤️ Made by Sumit

      </p>

    </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: "🎂 New Birthday Website Response",
      html,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Email sending failed",
      },
      {
        status: 500,
      }
    );
  }
}