const config = {
  baseUrl: import.meta.env.VITE_BASE_URL,
  postUrl: `${import.meta.env.VITE_BASE_URL}/posts`,
  commentsUrl: `${import.meta.env.VITE_BASE_URL}/comments`,
  siteName: import.meta.env.VITE_BASE_URL,
};

console.log('config ===', config);

if (Object.values(config).includes(undefined)) {
  console.warn('Check your .env file. Do you have it?');
}

export default config;
