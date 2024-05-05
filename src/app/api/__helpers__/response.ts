import { NextResponse } from 'next/server';

type ResponseParams = {
  status: number;
  message?: string;
  data?: any;
};

export default function response({
  status,
  message,
  data,
}: ResponseParams): NextResponse {
  let ok: Boolean = status >= 100 && status <= 226 ? true : false;

  return NextResponse.json({ ok, status, message, data });
}
