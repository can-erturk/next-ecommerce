import { NextResponse } from 'next/server';

interface ResponseParams {
  status: number;
  message?: string;
  data?: any;
}

export default function response({
  status,
  message,
  data,
}: ResponseParams): NextResponse {
  // Create a status text based on the status code
  let statusText: string = status >= 200 && status < 300 ? 'OK' : 'ERR';

  // Return the response with the given information
  return NextResponse.json({ status, statusText, message, data });
}
