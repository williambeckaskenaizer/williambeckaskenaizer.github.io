export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="app-root">{children}</div>
  )
}
