import crypto from 'crypto';

function base64UrlEncode(str) {
    return Buffer.from(str).toString('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

// Header
const header = {
    "alg": "HS256",
    "typ": "JWT"
};

// Payload
const payload = {
    "sub": "1234567890",
    "name": "John Doe",
    "admin": true
};

// Create base64Url versions of the header and the payload
const encodedHeader = base64UrlEncode(JSON.stringify(header));
const encodedPayload = base64UrlEncode(JSON.stringify(payload));

// Combine the header and the payload to form the initial part of the JWT
const signatureBase = `${encodedHeader}.${encodedPayload}`;

// Secret
const secret = 'your-secret-key';

// Create HMAC SHA256 signature
const signature = crypto.createHmac('sha256', secret).update(signatureBase).digest('base64url')

// Combine all parts to create the JWT
const jwt = `${signatureBase}.${signature}`;

console.log(jwt);
