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
  return isArray(alternative) ? alternative[0] : alternative
}
