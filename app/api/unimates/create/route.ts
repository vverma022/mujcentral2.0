import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import {v2 as cloudinary} from 'cloudinary';

const prisma = new PrismaClient();

cloudinary.config({
   cloud_name: process.env.CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET
});

async function fileToBase64(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return `data:${file.type};base64,${buffer.toString('base64')}`;
}

export async function POST(req: NextRequest) {
  try {
    const  body = await req.formData(); 
    const imageobject = body.get('postPhoto');
    const image = await fileToBase64(imageobject as File);
    console.log('Received image:', image);
    console.log('Received data:', body); 

    if (typeof image !== 'string' || !image) {
      throw new Error('Invalid image data');
    }
    
    const name = body.get('name')?.toString() || '';
    const gender = body.get('gender')?.toString() || '';
    const yearofentry = parseInt(body.get('yearofentry')?.toString() || '0', 10);
    const yearofgraduation = parseInt(body.get('yearofgraduation')?.toString() || '0', 10);
    const city = body.get('city')?.toString() || '';
    const course = body.get('course')?.toString() || '';
    const major = body.get('major')?.toString() || '';
    const instagram = body.get('instagram')?.toString() || null;
    const facebook = body.get('facebook')?.toString() || null;
    const twitter = body.get('twitter')?.toString() || null;
    const description = body.get('description')?.toString() || null;

    const profile = await prisma.profile.create({
       data: {
         name: name || '', 
         gender: gender || '', 
         enrollmentYear: yearofentry, 
         graduationYear: yearofgraduation,
         city: city || '', 
         course: course || '', 
         major: major || '', 
         instagram: instagram, 
         facebook: facebook, 
         twitter: twitter, 
         description: description 
       }
    });

    const uploadedImage = await cloudinary.uploader.upload(image, {
       folder: 'unimates_profile_images'
    })

    await prisma.photo.create({
      data:{
        url: uploadedImage.secure_url,
        profileId: profile.id
      }
    })

    
    return NextResponse.json({ success: true, message: 'Profile received successfully' });
  } catch (error) {
    console.error('Error processing profile data:', error);
    return NextResponse.json(
      { error: 'Failed to process your profile. Please try again.' },
      { status: 500 }
    );
  } finally {
     await prisma.$disconnect();
  }
}