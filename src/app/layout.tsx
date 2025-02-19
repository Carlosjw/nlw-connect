import './globals.css'

import type { Metadata } from 'next'
import { Montserrat, Oxanium } from 'next/font/google'

export const metadata: Metadata = {
  title: 'devstage',
}

// Definindo propriedades das fontes personalizdada
const oxanium = Oxanium({
  weight: ['500', '600'], // peso da fonte
  subsets: ['latin'], // quais caracteres carregar
  variable: '--font-oxanium', // dizendo pro Tailwind qual o nome da variável que chama esta fonte
})

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased bg-[url(/background.png)] bg-no-repeat bg-top md:bg-right-top">
        {children}
      </body>
    </html>
  )
}
