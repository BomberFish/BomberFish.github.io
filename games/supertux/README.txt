These files are meant to be distributed over a web server. Note that accessing the files locally (file://) won't work; it needs to be done over HTTPS.

To ensure SuperTux works properly, make sure the files are distributed over HTTPS (not regular HTTP) and that the two following headers are set:

  Cross-Origin-Opener-Policy: same-origin
  Cross-Origin-Embedder-Policy: require-corp

If one of these three requirements is missing (HTTPS, COOP, COEP), you might see an error message saying that SharedArrayBuffers are missing. For more details, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements



Last update: December 22, 2021, 19:26 EST (-0500)

