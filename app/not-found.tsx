export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <title>Page Not Found | Jumbo Safaris</title>
        <meta name="robots" content="noindex" />
        <style>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: #FFF7EC;
            color: #1A1A1A;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            text-align: center;
          }
          .container { max-width: 480px; padding: 2rem; }
          h1 { font-size: 5rem; font-weight: 800; color: #033417; margin: 0; }
          h2 { font-size: 1.5rem; font-weight: 600; color: #033417; margin: 0.5rem 0 1rem; }
          p { color: #5C5C5C; margin-bottom: 2rem; line-height: 1.6; }
          a {
            display: inline-block;
            background: #033417;
            color: #FFF7EC;
            padding: 0.875rem 2rem;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.875rem;
            letter-spacing: 0.05em;
            text-transform: uppercase;
          }
          a:hover { background: #022510; }
        `}</style>
      </head>
      <body>
        <div className="container">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for does not exist or has been moved.</p>
          <a href="/">Return to Jumbo Safaris</a>
        </div>
      </body>
    </html>
  )
}
