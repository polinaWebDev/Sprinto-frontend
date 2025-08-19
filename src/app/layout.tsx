import { ThemeProvider } from '@/shared/providers/theme-provider'
import './globals.css'
import Provider from '@/shared/providers/tanstack-provider'
import { Toaster } from 'sonner'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head title="CollabSpace" />
        <body>
          <Provider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster richColors position="top-center" />
            </ThemeProvider>
          </Provider>
        </body>
      </html>
    </>
  )
}
