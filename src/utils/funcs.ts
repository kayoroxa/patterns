export function template(id: string) {
  let alternatives = [
    '👤 i',
    '👉 you',
    '🧑 he',
    '👩 she',
    '👨‍👩‍👦 we',
    // '👥👥 you all',
    '👯‍♀️👯‍♂️ they',
    // 'those people',
  ]

  if (id === 'p2')
    alternatives = [
      'me',
      '👉 you',
      '👩 her',
      '🧑 him',
      '👨‍👩‍👦 us',
      'them',
      'us all',
      'all of us',
    ]
  if (id === 'code')
    alternatives = [
      'will',
      "⛔ won't",
      "⛔ don't",
      'would',
      "⛔ wouldn't",
      'can',
      'could',
    ]
  if (id === 'be+p')
    alternatives = [
      'am 👤 i',
      'are 👉 you',
      'is 🧑 he',
      'is 👩 she',
      'is 🧔 Jack',
      'are 👨‍👩‍👦 we',
      'are  👯‍♀️ they',
      // 'are those people',
    ]
  if (id === 'p+be')
    alternatives = [
      '👤 i am',
      '👉 you are',
      '🧑 he is',
      '👩 she is',
      '🧔 Jack is',
      '👨‍👩‍👦 we are',
      '👯‍♀️ they are',
      // 'those people are',
    ]
  if (id === 'be') alternatives = ['am | is | are']
  if (id === 'be2') alternatives = ['was | were']
  if (id === 'be1_2')
    alternatives = [
      //
      '🟢 am | is | are',
      '🔙 was | were',
    ]

  if (id === 'ancora') alternatives = ['which means', '_']

  if (id === 'aumentadores')
    alternatives = ['really', 'sure', 'literally', `suddenly`, '_']
  return {
    id,
    alternatives,
  }
}
