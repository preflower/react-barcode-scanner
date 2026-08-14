import { getPageMetadata, getStaticParams, MdxPage } from '../../../mdx-page'

const LANG = 'zh-CN'

export function generateStaticParams () {
  return getStaticParams(LANG)
}

export function generateMetadata ({ params }) {
  return getPageMetadata(params, LANG)
}

export default function Page (props) {
  return MdxPage(props, LANG)
}
