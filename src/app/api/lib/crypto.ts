import crypto from 'crypto';

export const hashSha256 = (str: string) => {
  const hash = crypto.createHash('sha256');
  hash.update(str);
  return hash.digest('hex');
};

/**
 * Hashes a string and returns the first 32 characters.
 */
export const hash = (str: string) => {
  const shahash = hashSha256(str);
  return shahash.slice(0, 32);
};
