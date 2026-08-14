import { metadata, SiteLayout } from '../../site-layout'

export { metadata }

export default function ChineseLayout ({ children }) {
  return <SiteLayout lang="zh-CN">{children}</SiteLayout>
}
