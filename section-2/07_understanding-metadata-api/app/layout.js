export const metadata = {
  title: {
    template: "%s | Technical Agency",
    default: "Technical Agency",
  },
  description: "Hello World!",
};

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
