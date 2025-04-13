// src/utils/helpers.js

export const formatComicTitle = (title) => {
    return title.charAt(0).toUpperCase() + title.slice(1);
};

export const calculateReadingTime = (comicContent) => {
    const wordsPerMinute = 200; // Average reading speed
    const wordCount = comicContent.split(' ').length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
};

export const sanitizeInput = (input) => {
    return input.replace(/<[^>]*>/g, ''); // Remove HTML tags
};