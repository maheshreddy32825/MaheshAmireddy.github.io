/**
 * Email obfuscation utility
 * Encodes email addresses to protect from spam bots while maintaining usability
 */

const EMAIL = 'amireddym0144@gmail.com';

/**
 * Simple ROT13 cipher for encoding
 */
export function rot13(str: string): string {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + 13) % 26) + 65);
    }
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + 13) % 26) + 97);
    }
    return char;
  });
}

/**
 * Get the obfuscated email (encoded)
 */
export function getObfuscatedEmail(): string {
  return rot13(EMAIL);
}

/**
 * Get the actual email (decoded)
 */
export function getActualEmail(): string {
  return EMAIL;
}

/**
 * Create a mailto link with obfuscated display text
 */
export function createObfuscatedEmailLink(): string {
  const obfuscated = getObfuscatedEmail();
  return `javascript:(function(){var e='${EMAIL}';window.location.href='mailto:'+e})();`;
}
