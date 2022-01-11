/** @type {import('next').NextConfig} */
module.exports = {
  distDir: 'build',
  serverRuntimeConfig: {
    // Will only be available on the server side
    apiUrl: 'http://signup-api:3000'
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiUrl: 'http://localhost:3000'
  }
}