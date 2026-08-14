import { generateStaticParamsFor, importPage } from 'nextra/pages'

import { useMDXComponents as getMDXComponents } from '../mdx-components'

import { buildPageMetadata, FaqStructuredData } from './seo'

const Wrapper = getMDXComponents().wrapper

export async function getStaticParams (lang) {
  const params = await generateStaticParamsFor('mdxPath', 'lang')()

  return params
    .filter(item => item.lang === lang)
    .map(({ mdxPath }) => ({ mdxPath }))
}

export async function getPageMetadata (paramsPromise, lang) {
  const { mdxPath } = await paramsPromise
  const { metadata } = await importPage(mdxPath, lang)

  return buildPageMetadata(metadata, lang, mdxPath)
}

export async function MdxPage (props, lang) {
  const params = await props.params
  const { mdxPath } = params
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode
  } = await importPage(mdxPath, lang)
  const isFaq = mdxPath?.join('/') === 'docs/faq'

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      {isFaq ? <FaqStructuredData lang={lang} /> : null}
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
