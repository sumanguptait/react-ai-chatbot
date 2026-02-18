const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
// console.log("Gemini key:", import.meta.env.VITE_GEMINI_API_KEY);

export const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`;
