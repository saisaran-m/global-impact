import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email, amount, frequency, name } = await req.json();

    if (!email || !amount) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Configure the transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const frequencyText = frequency === 'monthly' ? 'monthly' : 'one-time';

    const mailOptions = {
      from: `"GlobalImpact Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for your generous donation!',
      html: `
        <div style="font-family: Arial, sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #059669; text-align: center;">GlobalImpact</h2>
          <p style="font-size: 16px; color: #374151;">Dear ${name || 'Donor'},</p>
          <p style="font-size: 16px; color: #374151;">
            Thank you so much for your generous <strong>${frequencyText}</strong> donation of <strong>$${amount}</strong>.
          </p>
          <p style="font-size: 16px; color: #374151;">
            Your support directly funds our field programs and makes a lasting impact on communities worldwide. 
            With your help, we are able to provide clean water, education, and essential healthcare to those who need it most.
          </p>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin: 20px 0; text-align: center;">
            <h3 style="margin: 0; color: #1f2937;">Donation Receipt</h3>
            <p style="margin: 5px 0 0; color: #4b5563;">Amount: $${amount}</p>
            <p style="margin: 5px 0 0; color: #4b5563;">Date: ${new Date().toLocaleDateString()}</p>
          </div>
          <p style="font-size: 16px; color: #374151;">
            Thank you again for joining our mission to empower change.
          </p>
          <p style="font-size: 14px; color: #6b7280; text-align: center; margin-top: 40px;">
            &copy; ${new Date().getFullYear()} GlobalImpact. All rights reserved.
          </p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Receipt sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
