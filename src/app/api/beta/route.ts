import { NextResponse } from 'next/server';

import { hash } from '../lib/crypto';
// import db from '../lib/db';

export async function POST(request: Request) {
  const data = await request.json();
  const email = data?.email || '';
  if (!email) {
    return NextResponse.json({ error: 'email is required' }, { status: 400 });
  }

  // simplify email (e.g. cam+123@gmail.com -> cam@gmail.com)
  const regex = /\+.*@/;
  const emailWithoutPlus = email.replace(regex, '@');

  // save email in betaList
  const key = hash(emailWithoutPlus);
  const doc = {
    id: key,
    email: emailWithoutPlus,
    createdAt: new Date(),
  };

  // TODO: uncomment this and implement
  // const docRef = db.collection('betaList').doc(key);
  // await docRef.set(doc);

  return NextResponse.json({
    ok: true,
  });
}
