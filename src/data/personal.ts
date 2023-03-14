export const bigData = [
  {
    rawSentence: '{id} {what} {happened} {p}',
    replacements: [
      {
        id: 'id',
        alternatives: [
          //
          `I don't know`,
          `they want to know`,
          `_`,
        ],
      },
      {
        id: 'what',
        alternatives: [
          //
          'what',
        ],
      },
      {
        id: 'happened',
        alternatives: [
          //
          'happened to',
          "'s going on with",
        ],
      },
      {
        id: 'p',
        alternatives: [
          //
          'him',
          'them',
          'yesterday',
          'their house',
        ],
      },
    ],
  },
]
