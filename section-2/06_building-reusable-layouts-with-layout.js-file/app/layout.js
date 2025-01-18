export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "teal" }}>Header</header>
        {children}
        <footer style={{ background: "brown" }}>Footer</footer>
      </body>
    </html>
  );
}
