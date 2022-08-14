export default function translation(fraseEn: string) {
  const dict = [
    //
    ['were(?=.*ing)', 'estava'],
    ['was(?=.*ing)', 'estava'],
    ['are(?=.*ing)', 'está'],
    ['is(?=.*ing)', 'está'],
    ['am(?=.*ing)', 'está'],
    ['the first person', 'a primeira pessoa'],
    ['did', '🔙'],
    ['can not', 'não pode'],
    ["can't", 'não pode'],
    ['so smart', 'muito inteligente'],
    ['speaking little', 'falando pouco'],
    ['fine', 'bem'],
    ['wanna', 'quer'],
    ['want to', 'quer'],
    ['working hard', 'trabalhando duro'],
    ['doing the work', 'fazendo o trabalho'],
    ['you', 'você'],
    ['he', 'ele'],
    ['she', 'ela'],
    ['we', 'nós'],
    ['you all', 'todos vocês'],
    ['they', 'eles'],
    ['have to', 'tem que'],
    ['has to', 'tem que'],
    ['have', 'tem'],
    ['has', 'tem'],
    ['won', 'ganhou'],
    ['buy', 'compra'],
    ['a car', 'um carro'],
    ['a house', 'uma casa'],
    ['a dog', 'um cachorro'],
    ['a cat', 'um gato'],
    ['a horse', 'um cavalo'],
    ['study', 'estuda'],
    ['go to school', 'ir para escola'],
    ['go', 'ir'],
    ['work', 'trabalhar'],
    ["don't", 'não'],
    ['buy a house', 'comprar uma casa'],
    ['switch cars', 'trocar de carro'],
    ['study', 'estuda'],
    ['why', 'porque'],
    ['when', 'quando'],
    ['where', 'onde'],
    // ['do', 'PRESENTE'],
    // ['does', 'PRESENTE'],
    ['can', 'pode'],
    ['i', 'eu'],
    ['not', 'não'],

    ['was', 'era'],
    ['were', 'era'],
    ['are', 'é'],
    ['is', 'é'],
    ['will', 'vai'],
    ['am', 'sou'],
    ['vai (nós|ele|ela|eles|você|eu)', `$1 vai`],
    ['não pode (nós|ele|ela|eles|você|eu)', `$1 não pode`],
    ['pode (nós|ele|ela|eles|você|eu)', `$1 pode`],
    ['does não (nós|ele|ela|eles|você|eu)', '$1 não'],
    ['does (nós|ele|ela|eles|você|eu)', '$1'],
    ['do não (nós|ele|ela|eles|você|eu)', '$1 não'],
    ['do (nós|ele|ela|eles|você|eu)', '$1'],
    ['vai não (nós|ele|ela|eles|você|eu)', `$1 não vai`],
    ['vais', `vai`],
    ['nãos', `não`],
    ['vai tem', `vai ter`],

    ['não ir', `não vai`],
    ['nós ir', `nós vamos`],
    ['nós vai', `nós vamos`],
    ['você ir', `você vai`],
    ['eu não vai', `eu não vou`],
    ['nós não vai', `nós não vamos`],
  ]

  const frase = fraseEn.toLowerCase()

  const fraseTraduzida = dict.reduce((acc, [en, pt]) => {
    let regex = new RegExp(`\\b${en}\\b`, 'g')
    if (en.includes('(')) regex = new RegExp(en, 'g')
    return acc.replace(regex, pt)
  }, frase)

  return fraseTraduzida
}
