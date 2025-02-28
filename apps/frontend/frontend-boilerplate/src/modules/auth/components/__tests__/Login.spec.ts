import { describe, it, expect } from 'vitest';
import { loginSchema } from '../../schema';

describe('Login Schema', () => {
  it('validates correct input', () => {
    const result = loginSchema.safeParse({ email: 'user@example.com', password: 'secret123' });
    expect(result.success).toBe(true);
  });

  it('fails validation with incorrect email', () => {
    const result = loginSchema.safeParse({ email: 'invalid-email', password: 'secret123' });
    expect(result.success).toBe(false);
  });

  it('fails validation with short password', () => {
    const result = loginSchema.safeParse({ email: 'user@example.com', password: '123' });
    expect(result.success).toBe(false);
  });
});
