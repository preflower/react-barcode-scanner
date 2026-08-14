import { metadata, SiteLayout } from '../site-layout'

export { metadata }

export default function EnglishLayout ({ children }) {
  return <SiteLayout lang="en-US">{children}</SiteLayout>
}
