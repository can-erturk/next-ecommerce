import { createHash } from 'crypto';

export const sha256 = (text: string = ''): string => {
  // Salt the text
  const { NEXT_CRYPTO_SALT } = process.env;
  const saltedText = text + NEXT_CRYPTO_SALT;

  // Return the hashed text
  return createHash('sha256').update(saltedText).digest('hex');
};
