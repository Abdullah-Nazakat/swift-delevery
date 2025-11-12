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
          subject: `New Contact Form From Swift-Delivery: ${subject || 'No Subject'}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333; border-bottom: 2px solid #f97316; padding-bottom: 10px;">New Contact Form Submission</h2>
              <div style="background: #f9f9f9; padding: 20px; border-radius: 5px;">
                <p><strong style="color: #333;">Name:</strong> ${name}</p>
                <p><strong style="color: #333;">Email:</strong> ${email}</p>
                <p><strong style="color: #333;">Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong style="color: #333;">Subject:</strong> ${subject || 'Not provided'}</p>
                <p><strong style="color: #333;">Message:</strong></p>
                <div style="background: white; padding: 15px; border-left: 4px solid #f97316; margin-top: 10px;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              <p style="color: #666; font-size: 12px; margin-top: 20px;">
                <strong>Submitted at:</strong> ${new Date().toLocaleString()}
              </p>
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
    
    // return NextResponse.json(
    //   { error: 'An unexpected error occurred. Please try again.' },
    //   { status: 500 }
    // );
     return NextResponse.json(
    {
      error: 'An unexpected error occurred. Please try again.',
      details: JSON.stringify({
        name: error.name,
        message: error.message,
        stack: error.stack,
      }),
    },
    { status: 500 }
  );
  }
}

// Optional: Handle GET requests
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}