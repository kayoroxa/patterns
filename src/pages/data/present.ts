const str = `
All that matters is, {m} after {s} i {action}

m:
caio

s:
School 🏫
Lunch 🍝
Class

action:
study english 🎓
do exercise 🏋🏼
drink water 💦

////////

All that matters is, {m} after {s} i {action}

m:
rocha

s:
School 🏫
Lunch 🍝
Class

action:
study english 🎓
do exercise 🏋🏼
drink water 💦
`

export const bigData = [
  {
    rawSentence: 'All that matters is, {m} after {s} i {action}',
    replacements: [
      {
        id: 'm',
        alternatives: [
          //
          'always ♾️',
          'almost always',
          'right',
        ],
      },
      {
        id: 's',
        alternatives: [
          //
          'School 🏫',
          'Lunch 🍝',
          'Class',
        ],
      },
      {
        id: 'action',
        alternatives: [
          //
          'study english 🎓',
          'do exercise 🏋🏼',
          'drink water 💦',
        ],
      },
    ],
  },
  {
    rawSentence: 'i have to {find} the {coat} and the {book}',
    replacements: [
      {
        id: 'We',
        alternatives: [
          //
          'we',
          'i',
          'you',
          'she',
        ],
      },
      {
        id: 'find',
        alternatives: [
          //
          'find 🔭',
          'buy 🛒',
        ],
      },
      {
        id: 'coat',
        alternatives: [
          //
          'book 📔',
          'movie 🎬',
        ],
      },
      {
        id: 'book',
        alternatives: [
          //
          'tools 🧰',
          'hotdog 🌭',
        ],
      },
    ],
  },
  {
    rawSentence: 'i have to {find} the {coat} and the {book}',
    replacements: [
      {
        id: 'We',
        alternatives: [
          //
          'we',
          'i',
          'you',
          'she',
        ],
      },
      {
        id: 'find',
        alternatives: [
          //
          'find 🔭',
          'buy 🛒',
        ],
      },
      {
        id: 'coat',
        alternatives: [
          //
          'book 📔',
          'movie 🎬',
        ],
      },
      {
        id: 'book',
        alternatives: [
          //
          'tools 🧰',
          'hotdog 🌭',
        ],
      },
    ],
  },
  {
    rawSentence: "We don't {even} know {anything} about {this guy}",
    replacements: [
      {
        id: 'We',
        alternatives: [
          //
          'we',
          'i',
          'you',
          'she',
        ],
      },
      {
        id: 'even',
        alternatives: [
          //
          'even',
          '_',
        ],
      },
      {
        id: 'anything',
        alternatives: [
          //
          'anything 💁',
          '_',
        ],
      },
      {
        id: 'this guy',
        alternatives: [
          //
          'this guy',
          'this woman',
          'each others',
        ],
      },
    ],
  },
  {
    rawSentence: 'I {just} need some time to {process} everything',
    replacements: [
      {
        id: 'just',
        alternatives: [
          //
          'just',
          'really 🥺',
          '_',
        ],
      },
      {
        id: 'process',
        alternatives: [
          //
          'process ✨',
          'study',
          'buy 🛒',
        ],
      },
    ],
  },
]
