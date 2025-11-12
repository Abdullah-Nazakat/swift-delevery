import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import nodemailer from 'nodemailer';

export async function POST(request) {
  let client;
  
  try {
    const { 
      fullName, 
      phone, 
      loadType, 
      departure, 
      surrender, 
      internationalTrc, 
      height, 
      width 
    } = await request.json();
    
    console.log('Received shipment quote data:', { 
      fullName, phone, loadType, departure, surrender, internationalTrc, height, width 
    });
    
    // Required fields validation
    if (!fullName || !phone || !loadType || !departure || !surrender || !height || !width) {
      return NextResponse.json(
        { error: 'Please fill all required fields' },
        { status: 400 }
      );
    }

    // Phone validation (basic)
    const phoneRegex = /^[+]?[\d\s\-()]+$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Please provide a valid phone number' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || 'ozelea');
    
    const shipmentQuote = {
      fullName,
      phone,
      loadType,
      departure,
      surrender,
      internationalTrc: internationalTrc || 'No',
      height,
      width,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'new',
      type: 'shipment_quote'
    };

    const result = await db.collection('shipment_quotes').insertOne(shipmentQuote);
    console.log('Shipment quote saved to DB with ID:', result.insertedId);

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
          subject: `New Shipment Quote Request from ${fullName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px; border-radius: 10px;">
              <h2 style="color: #f97316; border-bottom: 3px solid #f97316; padding-bottom: 10px; text-align: center;">
                🚚 New Shipment Quote Request
              </h2>
              
              <div style="background: white; padding: 20px; border-radius: 8px; margin-top: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Full Name:</strong></td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Load Type:</strong></td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${loadType}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Departure:</strong></td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${departure}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Delivery:</strong></td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${surrender}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>International Transport:</strong></td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${internationalTrc || 'No'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Dimensions:</strong></td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #eee;">Height: ${height}, Width: ${width}</td>
                  </tr>
                </table>
              </div>
              
              <div style="margin-top: 20px; text-align: center; color: #666; font-size: 12px;">
                <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
                <p>Quote ID: ${result.insertedId}</p>
              </div>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log('Shipment quote email sent successfully');
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't return error to user if email fails
      }
    }

    return NextResponse.json(
      { 
        message: 'Thank you for your shipment quote request! We will contact you soon with pricing.',
        success: true,
        id: result.insertedId 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Shipment Quote API error:', error);
    
    if (error.name === 'MongoNetworkError') {
      return NextResponse.json(
        { error: 'Database connection failed. Please try again.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error:error },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}