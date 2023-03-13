const string = `
All that matters is, {m} after {s} i {action}

m:
always ♾️
almost always
right

s:
School 🏫
Lunch 🍝
Class

action:
study english 🎓
do exercise 🏋🏼
drink water 💦
`

function strToPattern(string) {
  string = string.trim()
  const rawSentence = string.split(/\n\n+/g)[0]
  const groups = string.split(/\n\n+/g).slice(1)

  const replacements = groups.map(group => {
    const [id, ...replacements] = group.split(/\n/g).filter(Boolean)

    return {
      id: id.replace(/\:/, ''),
      replacements,
    }
  })

  return {
    rawSentence,
    replacements,
  }
}

console.log(JSON.stringify(strToPattern(string), null, 2))
