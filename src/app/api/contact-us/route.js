// src/app/api/contact-us/route.js
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import nodemailer from 'nodemailer';

export async function POST(request) {
  let client;
  
  try {
    const { name, email, phone, subject, message } = await request.json();
    
    console.log('Received form data:', { name, email, phone, subject, message });
    
    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || 'ozelea');
    
    const contactSubmission = {
      name,
      email,
      phone: phone || null,
      subject: subject || null,
      message,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'new'
    };

    const result = await db.collection('contacts').insertOne(contactSubmission);
    console.log('Contact form saved to DB with ID:', result.insertedId);

    // Send email notification
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        });

      const mailOptions = {
  from: process.env.GMAIL_USER,
  to: process.env.NOTIFICATION_EMAIL,
  subject: `📩 New Contact Request — Swift Delivery`,
  html: `
  <div style="font-family: 'Segoe UI', Tahoma, sans-serif; background: #f6f7f9; padding: 40px;">
    
    <div style="max-width: 700px; margin: auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #111828, #0A2540); padding: 28px 35px; color: white;">
        <h2 style="margin: 0; font-size: 24px; font-weight: 600; color:"#f6f7f9">
          📬 New Contact Form Submission
        </h2>
        <p style="margin-top: 8px; opacity: 0.8; font-size: 14px;color:"#f6f7f9"">
          A user just submitted a message through your website.
        </p>
      </div>

      <!-- Body -->
      <div style="padding: 35px; background: #ffffff;">
        
        <h3 style="font-size: 18px; color: #0A2540; font-weight: 600; margin-bottom: 18px;">
          🔍 Contact Details
        </h3>

        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr>
            <td style="padding: 10px 0; font-weight: 600; width: 140px; color: #333;">Name:</td>
            <td style="padding: 10px 0; color: #555;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #333;">Email:</td>
            <td style="padding: 10px 0; color: #555;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #333;">Phone:</td>
            <td style="padding: 10px 0; color: #555;">${phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #333;">Subject:</td>
            <td style="padding: 10px 0; color: #555;">${subject || 'Not provided'}</td>
          </tr>
        </table>

        <h3 style="font-size: 18px; color: #0A2540; font-weight: 600; margin: 30px 0 12px;">
          💬 Message
        </h3>

        <div style="background: #f4f7fb; padding: 18px 20px; border-left: 4px solid #0A2540; border-radius: 6px; color: #333; line-height: 1.6; font-size: 15px;">
          ${message.replace(/\n/g, '<br>')}
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f0f2f5; padding: 20px 35px; font-size: 12px; color: #777; border-top: 1px solid #e3e6ea;">
        <p style="margin: 0;">
          Received on <strong>${new Date().toLocaleString()}</strong>
        </p>
        <p style="margin-top: 6px;">Swift Delivery — Automated Contact Notification</p>
      </div>

    </div>

  </div>
  `,
};
        await transporter.sendMail(mailOptions);
        console.log('Notification email sent successfully');
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't return error to user if email fails
      }
    }

    return NextResponse.json(
      { 
        message: 'Thank you for your message! We will contact you soon.',
        success: true,
        id: result.insertedId 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact API error:', error);
    
    // More specific error messages
    if (error.name === 'MongoNetworkError') {
      return NextResponse.json(
        { error: 'Database connection failed. Please try again.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: error },
      { status: 500 }
    );
  //    return NextResponse.json(
  //   {
  //     error: 'An unexpected error occurred. Please try again.',
  //     details: JSON.stringify({
  //       name: error.name,
  //       message: error.message,
  //       stack: error.stack,
  //     }),
  //   },
  //   { status: 500 }
  // );
  }
}

// Optional: Handle GET requests
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}