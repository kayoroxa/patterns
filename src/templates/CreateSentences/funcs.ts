import { isArray } from 'lodash'

export function getLangAlternative(
  lang: 'pt' | 'en',
  alternative: string | string[]
): string {
  if (lang === 'pt' && isArray(alternative)) {
    alternative = alternative[1]
  } else if (lang === 'en' && isArray(alternative)) {
    alternative = alternative[0]
  }

  if (isArray(alternative)) return alternative[0]
  if (typeof alternative === 'string') return alternative

  return ''
}
