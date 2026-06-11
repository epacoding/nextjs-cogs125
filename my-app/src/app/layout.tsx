export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#fff",
          color: "#000",
        }}
      >
        {children}
      </body>
    </html>
  );
}