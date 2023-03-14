import { template } from '../utils/funcs'

export const bigData = [
  {
    rawSentence: '{primeira} {conj} {segunda}',
    replacements: [
      {
        id: 'conj',
        alternatives: [
          //
          'and',
          'but',
          'or',
          'so',
          'because',
          'before',
          'even if',
          'as far as',
          'as if',
          'as soon as',
          'as long as',
          'until',
          'when',
        ],
      },
      {
        id: 'primeira',
        alternatives: [
          //
          'I want to do it',
          'I have to know that',
          'You talk to him',
          "Someday he didn't understand",
        ],
      },
      {
        id: 'segunda',
        alternatives: [
          //
          'You know',
          'Everybody want',
          'Nobody saw',
        ],
      },
    ],
  },
  {
    rawSentence: '{s} {w} {t}',
    replacements: [
      template('p'),
      {
        id: 's',
        alternatives: [
          //
          'Stop telling everyone',
        ],
      },
      {
        id: 'w',
        alternatives: [
          //
          'what have you been doing',
          'that despite this, you are doing',
        ],
      },
      {
        id: 't',
        alternatives: [
          //
          'from time to time',
          'every now and then',
        ],
      },
    ],
  },
  {
    rawSentence: '{w} {1} {have} {date}',
    replacements: [
      template('p'),
      {
        id: 'w',
        alternatives: [
          //
          'please know that',
          "i don't know why 🤷🏽‍♂️",
          "it doesn't mean that",
        ],
      },
      {
        id: '1',
        alternatives: [
          //
          "i'd like to 🤩",
          "you don't ❌",
          'i intend to 🙌🏽',
        ],
      },
      {
        id: 'have',
        alternatives: [
          //
          'have a car 🚗',
          'find out 🔍',
        ],
      },
      {
        id: 'date',
        alternatives: [
          //
          'today',
          'because of this',
        ],
      },
    ],
  },
  {
    rawSentence: '{you} would rather not be',
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
          '🔙 did',
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
          '🔙 did',
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
      {
        id: 'be',
        alternatives: [
          //
          '🟠 will be',
          '🔙 was | were',
        ],
      },
      {
        id: 'w',
        alternatives: [
          //
          '🤷‍♂️ why',
          '⏳ when',
        ],
      },
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
    rawSentence: '{w} {did} {p} {v}?',
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
        id: 'did',
        alternatives: [
          //
          '🔙 did',
          '🟠 will',
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
          "❌🟢 don't | doesn't",
          "❌🔙 didn't",
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
    rawSentence: '{p} {do} {not} {cont}',
    replacements: [
      template('p'),
      {
        id: 'do',
        alternatives: [
          //
          '🦾🟣🔵 could',
          '💪🟢 can',
        ],
      },
      {
        id: 'not',
        alternatives: [
          //
          'not ❌',
          // "n't ❌",
        ],
      },
      {
        id: 'cont',
        alternatives: [
          //
          // 'let you go 💔',
          'teach you 👨‍🏫👉',
          'ignore it 🤦‍♀️',
          'understand 🤷‍♂️',
          'do it ✅',
          'see 👀',
          'speak 🗣',
        ],
      },
    ],
  },
  {
    rawSentence: '{p} {do} {not} {cont}',
    replacements: [
      template('p'),
      {
        id: 'do',
        alternatives: [
          //
          // '🦾🟣🔵 could',
          // '💪🟢 can',
          '🔸 will',
          '🟣 would',
          '🟢 do | does',
          '🔵 did',
        ],
      },
      {
        id: 'not',
        alternatives: [
          //
          'not ❌',
          // "n't ❌",
        ],
      },
      {
        id: 'cont',
        alternatives: [
          //
          // 'let you go 💔',
          'teach you 👨‍🏫👉',
          'ignore it 🤦‍♀️',
          'understand 🤷‍♂️',
          'do it ✅',
          'see 👀',
          'speak 🗣',
        ],
      },
    ],
  },
  {
    rawSentence: '{p} {code} {have} {cont}',
    replacements: [
      template('p'),
      {
        id: 'have',
        alternatives: [
          //
          'have',
          'win 🎁',
          'like 🤩',
          // 'buy 💸',
        ],
      },
      {
        id: 'code',
        alternatives: [
          //
          'will 🔸',
          // 'do | does 🟢',
          'would 🟣',
        ],
      },
      {
        id: 'not',
        alternatives: [
          //
          'not ❌',
          '_',
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
          'a park 🎡',
        ],
      },
    ],
  },
  {
    rawSentence: '{p} {have} {cont}',
    replacements: [
      template('p'),
      {
        id: 'have',
        alternatives: [
          //
          'have | has',
          'won 🎁',
          'like 🤩',
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
          'a park 🎡',
        ],
      },
    ],
  },
]
