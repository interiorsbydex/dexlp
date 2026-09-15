import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You | Interiors by DeX',
  description: 'Your consultation request has been received',
}

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
