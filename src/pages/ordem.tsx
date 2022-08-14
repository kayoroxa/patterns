import { useState } from 'react'
import CreateSentences from '../templates/CreateSentences'

function template(id: string) {
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
  if (id === 'be') alternatives = ['am | are | is']
  if (id === 'be2') alternatives = ['was | were']
  if (id === 'be1_2') alternatives = ['🟢 am | are | is', '🔙 was | were']

  if (id === 'ancora') alternatives = ['which means', '_']

  if (id === 'aumentadores')
    alternatives = ['really', 'sure', 'literally', `suddenly`, '_']
  return {
    id,
    alternatives,
  }
}

const bigData = [
  {
    rawSentence: '{code} {not} {p} {comp}?',
    replacements: [
      template('p'),
      {
        id: 'not',
        alternatives: [
          //
          'not ❌',
          '_',
        ],
      },
      {
        id: 'code',
        alternatives: [
          //
          '🟢 do | does',
          '🟠 will',
          '💪 can',
        ],
      },

      {
        id: 'comp',
        alternatives: [
          //
          'have a car 🚗',
          'go to school 🏫',
          'buy a house 🏠',
        ],
      },
    ],
  },

  {
    rawSentence: '{w} {be} {p} {adj}?',
    replacements: [
      template('p'),
      template('be'),
      {
        id: 'w',
        alternatives: [
          //
          '🤷‍♂️ why',
          '⏳ when',
          '🗺️ where',
        ],
      },
      {
        id: 'adj',
        alternatives: [
          //
          'the first person 🥇🧘‍♂️',
          'so smart 🧠',
          'speak little 🗣🤏',
          'fine 👍',
          'working hard 💼🔥',
          'doing the work 🔨💼',
        ],
      },
    ],
  },
  {
    rawSentence: '{w} 🔙 did {p} {v}?',
    replacements: [
      template('p'),
      {
        id: 'w',
        alternatives: [
          //
          '🤷‍♂️ why',
          '⏳ when',
          '🗺️ where',
        ],
      },

      {
        id: 'v',
        alternatives: [
          //
          'buy a house 💰🏠',
          'go to school 🏫🚶‍♂️',
          'switch cars 💱🚗',
          'study 📚',
        ],
      },
    ],
  },
  {
    rawSentence: "{p} {don't} {code} {comp}",
    replacements: [
      template('p'),
      {
        id: 'code',
        alternatives: [
          //
          // '🟠 will',
          '🙏 wanna',
          '🙏 want to',
          '👨‍🏫 have to',
        ],
      },
      {
        id: "don't",
        alternatives: [
          //
          "don't ❌",
          '_',
        ],
      },
      {
        id: 'comp',
        alternatives: [
          //
          'study 📚',
          'go 🚶‍♂️',
          'work 💼',
        ],
      },
    ],
  },
  {
    rawSentence: '{p} {be1_2} {adj}',
    replacements: [
      template('p'),
      template('be1_2'),

      {
        id: 'adj',
        alternatives: [
          //
          'the first person 🥇🧘‍♂️',
          'so smart 🧠',
          'speaking little 🗣🤏',
          'fine 👍',
          'working hard 💼🔥',
          'doing the work 🔨💼',
        ],
      },
    ],
  },
  {
    rawSentence: '{p} {have} {cont}?',
    replacements: [
      template('p'),
      {
        id: 'have',
        alternatives: [
          //
          'have | has',
          'won 🎁',
          'buy 💸',
        ],
      },
      {
        id: 'cont',
        alternatives: [
          //
          'a car 🚗',
          'a house 🏠',
          'a dog 🐶',
          'a cat 🐱',
          'a horse 🐎',
        ],
      },
    ],
  },
]

const after = [
  "That's why I thought, ",
  'right?',
  'at first, but …',
  'since … (since you got here) / since the moment I saw you',
]

export default function PlayPage() {
  const [indexData, setIndexData] = useState(0)
  const [anki, setAnki] = useState<{ [key: string]: number }>({})

  return (
    <div>
      <CreateSentences
        patternsInfo={{
          currentIndex: bigData.length - indexData,
          length: bigData.length,
        }}
        data={bigData[indexData]}
        onPrev={() =>
          setIndexData(prev => {
            if (prev + 1 >= bigData.length) {
              return 0
            }
            return prev + 1
          })
        }
        anki={anki}
        setAnki={setAnki}
        onNext={() =>
          setIndexData(prev => {
            if (prev - 1 < 0) {
              return bigData.length - 1
            }
            return prev - 1
          })
        }
        before={false}
        after={after}
      />
      <div style={{ padding: '50px' }}>
        {[...new Map(Object.entries(anki).sort((a, b) => a[1] - b[1]))].map(
          v => (
            <>
              {v[0]}: {v[1]}
              <br />
            </>
          )
        )}
      </div>
    </div>
  )
}
