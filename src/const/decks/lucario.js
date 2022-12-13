let list = [

  {
    type: 'pokemon',
    isTane: true, 
    evloveTo: 'オコリザル',
    isPokemonV: false, 
    isPokemonVMax: false,
    name: 'マンキー', 
    hp: 60, 
    pokemonType: 'fighting', 
    
    moves: [
      {
        name: 'ひっかく',
        description: '',
        damage: 10, 
        requiredEnergy: ['fighting'],
      },
    ], 
    weakeness: 'psychic',
    resistance: '',
    runawayCost: 1,
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039856_P_MANKI.jpg',

    location: 'pile',
    holdingEnergy: [],
    attackedDamage: 0,
  },

  {
    type: 'pokemon',
    isTane: false, 
    evlovedFrom: 'マンキー',
    name: 'オコリザル', 
    hp: 100, 
    pokemonType: 'fighting', 
    
    moves: [
      {
        name: 'こんじょうパンチ',
        description: '相手のバトルポケモンが「ポケモンV」なら、６０ダメージ追加',
        damage: 30, 
        requiredEnergy: ['fighting'],
      },
    ], 
    weakeness: 'psychic',
    resistance: '',
    runawayCost: 1,
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039857_P_OKORIZARU.jpg',

    location: 'pile',
    holdingEnergy: [],
    attackedDamage: 0,
  },

  {
    type: 'pokemon',
    isTane: true, 
    isPokemonV: true, 
    name: 'ルカリオ', 
    hp: 210, 
    pokemonType: 'fighting', 
    
    moves: [
      {
        name: 'はどうだん',
        description: '',
        damage: 120, 
        requiredEnergy: ['fighting','fighting','colorless'],
      },
    ], 
    weakeness: 'psychic',
    resistance: '',
    runawayCost: 2,
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039858_P_RUKARIOV.jpg',

    location: 'pile',
    holdingEnergy: [],
    attackedDamage: 0,
  },

  {
    type: 'pokemon',
    isTane: true, 
    evloveTo: 'オトスパス',
    name: 'タタッコ', 
    hp: 80, 
    pokemonType: 'fighting', 
    
    moves: [
      {
        name: 'たたく',
        description: '',
        damage: 10, 
        requiredEnergy: ['fighting'],
      },
      {
        name: 'げんこつ',
        description: '',
        damage: 20, 
        requiredEnergy: ['fighting','colorless'],
      },
    ], 
    weakeness: 'psychic',
    resistance: '',
    runawayCost: 2,
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039859_P_TATAKKO.jpg',

    location: 'pile',
    holdingEnergy: [],
    attackedDamage: 0,
  },
  {
    type: 'pokemon',
    isTane: true, 
    evloveTo: 'オトスパス',
    name: 'タタッコ', 
    hp: 80, 
    pokemonType: 'fighting', 
    
    moves: [
      {
        name: 'たたく',
        description: '',
        damage: 10, 
        requiredEnergy: ['fighting'],
      },
      {
        name: 'げんこつ',
        description: '',
        damage: 20, 
        requiredEnergy: ['fighting','colorless'],
      },
    ], 
    weakeness: 'psychic',
    resistance: '',
    runawayCost: 2,
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039859_P_TATAKKO.jpg',

    location: 'pile',
    holdingEnergy: [],
    attackedDamage: 0,
  },
  {
    type: 'pokemon',
    isTane: true, 
    evloveTo: 'オトスパス',
    name: 'タタッコ', 
    hp: 80, 
    pokemonType: 'fighting', 
    
    moves: [
      {
        name: 'たたく',
        description: '',
        damage: 10, 
        requiredEnergy: ['fighting'],
      },
      {
        name: 'げんこつ',
        description: '',
        damage: 20, 
        requiredEnergy: ['fighting','colorless'],
      },
    ], 
    weakeness: 'psychic',
    resistance: '',
    runawayCost: 2,
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039859_P_TATAKKO.jpg',

    location: 'pile',
    holdingEnergy: [],
    attackedDamage: 0,
  },

  {
    type: 'pokemon',
    isTane: false, 
    evlovedFrom: 'タタッコ',
    name: 'オトスパス', 
    hp: 130, 
    pokemonType: 'fighting', 
    
    moves: [
      {
        name: 'つきたおし',
        description: '',
        damage: 40, 
        requiredEnergy: ['fighting','colorless'],
      },
      {
        name: 'マグナムパンチ',
        description: '',
        damage: 90, 
        requiredEnergy: ['fighting','fighting','colorless'],
      },
    ], 
    weakeness: 'psychic',
    resistance: '',
    runawayCost: 2,
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039860_P_OTOSUPASU.jpg',

    location: 'pile',
    holdingEnergy: [],
    attackedDamage: 0,
  },
  {
    type: 'pokemon',
    isTane: false, 
    evlovedFrom: 'タタッコ',
    name: 'オトスパス', 
    hp: 130, 
    pokemonType: 'fighting', 
    
    moves: [
      {
        name: 'つきたおし',
        description: '',
        damage: 40, 
        requiredEnergy: ['fighting','colorless'],
      },
      {
        name: 'マグナムパンチ',
        description: '',
        damage: 90, 
        requiredEnergy: ['fighting','fighting','colorless'],
      },
    ], 
    weakeness: 'psychic',
    resistance: '',
    runawayCost: 2,
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039860_P_OTOSUPASU.jpg',

    location: 'pile',
    holdingEnergy: [],
    attackedDamage: 0,
  },

  {
    type: 'pokemon',
    isTane: true, 
    name: 'タイレーツ', 
    hp: 90, 
    pokemonType: 'fighting', 
    
    moves: [
      {
        name: 'せめこむ',
        description: '',
        damage: 30, 
        requiredEnergy: ['fighting'],
      },
    ], 
    weakeness: 'psychic',
    resistance: '',
    runawayCost: 1,
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039861_P_TAIRETSU.jpg',

    location: 'pile',
    holdingEnergy: [],
    attackedDamage: 0,
  },


  {
    type: 'pokemon',
    isTane: true, 
    isPokemonV: true, 
    name: 'バンギラス', 
    hp: 230, 
    pokemonType: 'dark', 
    
    moves: [
      {
        name: 'ぶちかます',
        description: '',
        damage: 80, 
        requiredEnergy: ['dark','colorless','colorless'],
      },
      {
        name: 'ランドクラッシュ',
        description: '',
        damage: 150, 
        requiredEnergy: ['dark','dark','dark','colorless'],
      },
    ], 
    weakeness: 'grass',
    resistance: '',
    runawayCost: 4,
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039862_P_BANGIRASUV.jpg',

    location: 'pile',
    holdingEnergy: [],
    attackedDamage: 0,
  },

  {
    type: 'pokemon',
    isTane: true, 
    name: 'キバニア', 
    evloveTo: 'サメハダー',
    hp: 50, 
    pokemonType: 'dark', 
    
    moves: [
      {
        name: 'かみつく',
        description: '',
        damage: 10, 
        requiredEnergy: ['colorless'],
      },
    ], 
    weakeness: 'grass',
    resistance: '',
    runawayCost: 1,
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039863_P_KIBANIA.jpg',

    location: 'pile',
    holdingEnergy: [],
    attackedDamage: 0,
  },
  {
    type: 'pokemon',
    isTane: true, 
    name: 'キバニア', 
    evloveTo: 'サメハダー',
    hp: 50, 
    pokemonType: 'dark', 
    
    moves: [
      {
        name: 'かみつく',
        description: '',
        damage: 10, 
        requiredEnergy: ['colorless'],
      },
    ], 
    weakeness: 'grass',
    resistance: '',
    runawayCost: 1,
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039863_P_KIBANIA.jpg',

    location: 'pile',
    holdingEnergy: [],
    attackedDamage: 0,
  },
  {
    type: 'pokemon',
    isTane: true, 
    name: 'キバニア', 
    evloveTo: 'サメハダー',
    hp: 50, 
    pokemonType: 'dark', 
    
    moves: [
      {
        name: 'かみつく',
        description: '',
        damage: 10, 
        requiredEnergy: ['colorless'],
      },
    ], 
    weakeness: 'grass',
    resistance: '',
    runawayCost: 1,
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039863_P_KIBANIA.jpg',

    location: 'pile',
    holdingEnergy: [],
    attackedDamage: 0,
  },

  {
    type: 'pokemon',
    isTane: false, 
    name: 'サメハダー', 
    evlovedFrom: 'キバニア',
    hp: 100, 
    pokemonType: 'dark', 
    
    moves: [
      {
        name: 'するどいキバ',
        description: '',
        damage: 70, 
        requiredEnergy: ['dark','colorless'],
      },
    ], 
    weakeness: 'grass',
    resistance: '',
    runawayCost: 1,
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039864_P_SAMEHADA.jpg',

    location: 'pile',
    holdingEnergy: [],
    attackedDamage: 0,
  },
  {
    type: 'pokemon',
    isTane: false, 
    name: 'サメハダー', 
    evlovedFrom: 'キバニア',
    hp: 100, 
    pokemonType: 'dark', 
    
    moves: [
      {
        name: 'するどいキバ',
        description: '',
        damage: 70, 
        requiredEnergy: ['dark','colorless'],
      },
    ], 
    weakeness: 'grass',
    resistance: '',
    runawayCost: 1,
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039864_P_SAMEHADA.jpg',

    location: 'pile',
    holdingEnergy: [],
    attackedDamage: 0,
  },

  {
    type: 'pokemon',
    isTane: true, 
    name: 'ダークライ', 
    hp: 110, 
    pokemonType: 'dark', 
    
    moves: [
      {
        name: 'ダークカッター',
        description: '',
        damage: 90, 
        requiredEnergy: ['dark','colorless','colorless'],
      },
    ], 
    weakeness: 'grass',
    resistance: '',
    runawayCost: 2,
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039865_P_DAKURAI.jpg',

    location: 'pile',
    holdingEnergy: [],
    attackedDamage: 0,
  },

  {
    type: 'pokemon',
    isTane: true, 
    name: 'ゾロア', 
    evloveTo: 'ゾロアーク',
    hp: 60, 
    pokemonType: 'dark', 
    
    moves: [
      {
        name: 'ぶつかる',
        description: '',
        damage: 10, 
        requiredEnergy: ['colorless'],
      },
      {
        name: 'うしろげり',
        description: '',
        damage: 20, 
        requiredEnergy: ['dark','colorless'],
      },
    ], 
    weakeness: 'grass',
    resistance: '',
    runawayCost: 1,
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039866_P_ZOROA.jpg',

    location: 'pile',
    holdingEnergy: [],
    attackedDamage: 0,
  },
  {
    type: 'pokemon',
    isTane: true, 
    name: 'ゾロア', 
    evloveTo: 'ゾロアーク',
    hp: 60, 
    pokemonType: 'dark', 
    
    moves: [
      {
        name: 'ぶつかる',
        description: '',
        damage: 10, 
        requiredEnergy: ['colorless'],
      },
      {
        name: 'うしろげり',
        description: '',
        damage: 20, 
        requiredEnergy: ['dark','colorless'],
      },
    ], 
    weakeness: 'grass',
    resistance: '',
    runawayCost: 1,
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039866_P_ZOROA.jpg',

    location: 'pile',
    holdingEnergy: [],
    attackedDamage: 0,
  },

  {
    type: 'pokemon',
    isTane: false, 
    name: 'ゾロアーク', 
    evlovedFrom: 'ゾロア',
    hp: 120, 
    pokemonType: 'dark', 
    
    moves: [
      {
        name: 'ダブルクロー',
        description: 'コインを2回投げ、オモテの数×40ダメージ。',
        damage: 40, 
        requiredEnergy: ['colorless'],
      },
      {
        name: 'ナイトバースト',
        description: '',
        damage: 100, 
        requiredEnergy: ['dark','dark','colorless'],
      },
    ], 
    weakeness: 'grass',
    resistance: '',
    runawayCost: 2,
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039867_P_ZOROAKU.jpg',

    location: 'pile',
    holdingEnergy: [],
    attackedDamage: 0,
  },

  {
    type: 'pokemon',
    isTane: true, 
    name: 'ウール', 
    hp: 70, 
    pokemonType: 'normal', 
    
    moves: [
      {
        name: 'はねとばす',
        description: '',
        damage: 20, 
        requiredEnergy: ['colorless','colorless'],
      },
    ], 
    weakeness: 'fighting',
    resistance: '',
    runawayCost: 1,
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039868_P_URU.jpg',

    location: 'pile',
    holdingEnergy: [],
    attackedDamage: 0,
  },

  // item --------------------------------
  {
    type: 'item', 
    name: 'クラッシュハンマー', 
    description: 'コインを1回投げオモテなら、相手の場のポケモンについているエネルギーを1個選び、トラッシュする。',
    
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039869_T_KURASSHUHANMA.jpg',

    location: 'pile',
  },
  {
    type: 'item', 
    name: 'クラッシュハンマー', 
    description: 'コインを1回投げオモテなら、相手の場のポケモンについているエネルギーを1個選び、トラッシュする。',
    
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039869_T_KURASSHUHANMA.jpg',

    location: 'pile',
  },

  {
    type: 'item', 
    name: 'スーパーボール', 
    description: '自分の山札を上から7枚見る。その中からポケモンを1枚選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。 ',
    
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039870_T_SUPABORU.jpg',

    location: 'pile',
  },
  {
    type: 'item', 
    name: 'スーパーボール', 
    description: '自分の山札を上から7枚見る。その中からポケモンを1枚選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。 ',
    
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039870_T_SUPABORU.jpg',

    location: 'pile',
  },

  {
    type: 'item', 
    name: 'ポケモンいれかえ', 
    description: '自分のバトルポケモンをベンチポケモンと入れ替える。',
    
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SLD/041335_T_POKEMONIREKAE.jpg',

    location: 'pile',
  },
  {
    type: 'item', 
    name: 'ポケモンいれかえ', 
    description: '自分のバトルポケモンをベンチポケモンと入れ替える。',
    
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SLD/041335_T_POKEMONIREKAE.jpg',

    location: 'pile',
  },
  
  {
    type: 'item', 
    name: 'ポケモンキャッチャー', 
    description: 'コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。',
    
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039872_T_POKEMONKYACCHA.jpg',

    location: 'pile',
  },
  {
    type: 'item', 
    name: 'ポケモンキャッチャー', 
    description: 'コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。',
    
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039872_T_POKEMONKYACCHA.jpg',

    location: 'pile',
  },

  {
    type: 'item', 
    name: 'レベルボール', 
    description: '自分の山札から、HPが「90」以下のポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。',
    
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039873_T_REBERUBORU.jpg',

    location: 'pile',
  },
  {
    type: 'item', 
    name: 'レベルボール', 
    description: '自分の山札から、HPが「90」以下のポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。',
    
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039873_T_REBERUBORU.jpg',

    location: 'pile',
  },

  // support--------------------------------
  {
    type: 'support', 
    name: 'サナ', 
    description: '自分の手札をすべて山札にもどして切る。その後、山札を5枚引く。',
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/S7R/039946_T_SANA.jpg',

    location: 'pile',
  },

  {
    type: 'support', 
    name: 'ジャッジマン', 
    description: 'おたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、それぞれ山札を4枚引く。 ',
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/S8b/041090_T_JIXYAJJIMAN.jpg',

    location: 'pile',
  },
  {
    type: 'support', 
    name: 'ジャッジマン', 
    description: 'おたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、それぞれ山札を4枚引く。 ',
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/S8b/041090_T_JIXYAJJIMAN.jpg',

    location: 'pile',
  },

  {
    type: 'support', 
    name: 'ダンデ', 
    description: 'この番、自分のポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。',
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/S4/038921_T_DANDE.jpg',

    location: 'pile',
  },

  {
    type: 'support', 
    name: '博士の研究', 
    description: '自分の手札をすべてトラッシュし、山札を7枚引く。',
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/S10b/041803_T_HAKASENOKENKIXYUUUIROHAKASE.jpg',

    location: 'pile',
  },
  {
    type: 'support', 
    name: '博士の研究', 
    description: '自分の手札をすべてトラッシュし、山札を7枚引く。',
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/S10b/041803_T_HAKASENOKENKIXYUUUIROHAKASE.jpg',

    location: 'pile',
  },

  {
    type: 'support', 
    name: 'ホップ', 
    description: '自分の山札を3枚引く。',
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/S-P/037604_T_HOPPU.jpg',

    location: 'pile',
  },
  {
    type: 'support', 
    name: 'ホップ', 
    description: '自分の山札を3枚引く。',
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/S-P/037604_T_HOPPU.jpg',

    location: 'pile',
  },
  {
    type: 'support', 
    name: 'ホップ', 
    description: '自分の山札を3枚引く。',
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/S-P/037604_T_HOPPU.jpg',

    location: 'pile',
  },
  {
    type: 'support', 
    name: 'ホップ', 
    description: '自分の山札を3枚引く。',
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/S-P/037604_T_HOPPU.jpg',

    location: 'pile',
  },

  {
    type: 'support', 
    name: 'むしとりしょうねん', 
    description: '自分の山札を2枚引く。コインを1回投げオモテなら、さらに2枚引く。',
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039879_T_MUSHITORISHOUNEN.jpg',

    location: 'pile',
  },
  {
    type: 'support', 
    name: 'むしとりしょうねん', 
    description: '自分の山札を2枚引く。コインを1回投げオモテなら、さらに2枚引く。',
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039879_T_MUSHITORISHOUNEN.jpg',

    location: 'pile',
  },

  // energy ----------------------------------------------
  {
    type: 'energy', 
    name: 'fighting-energy', 
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039880_E_KIHONTOUENERUGI.jpg',

    location: 'pile',
  },
  {
    type: 'energy', 
    name: 'fighting-energy', 
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039880_E_KIHONTOUENERUGI.jpg',

    location: 'pile',
  },
  {
    type: 'energy', 
    name: 'fighting-energy', 
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039880_E_KIHONTOUENERUGI.jpg',

    location: 'pile',
  },
  {
    type: 'energy', 
    name: 'fighting-energy', 
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039880_E_KIHONTOUENERUGI.jpg',

    location: 'pile',
  },
  {
    type: 'energy', 
    name: 'fighting-energy', 
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039880_E_KIHONTOUENERUGI.jpg',

    location: 'pile',
  },
  {
    type: 'energy', 
    name: 'fighting-energy', 
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039880_E_KIHONTOUENERUGI.jpg',

    location: 'pile',
  },
  {
    type: 'energy', 
    name: 'fighting-energy', 
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039880_E_KIHONTOUENERUGI.jpg',

    location: 'pile',
  },
  {
    type: 'energy', 
    name: 'fighting-energy', 
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039880_E_KIHONTOUENERUGI.jpg',

    location: 'pile',
  },
  {
    type: 'energy', 
    name: 'fighting-energy', 
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039880_E_KIHONTOUENERUGI.jpg',

    location: 'pile',
  },

  {
    type: 'energy', 
    name: 'dark-energy', 
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039881_E_KIHONAKUENERUGI.jpg',

    location: 'pile',
  },
  {
    type: 'energy', 
    name: 'dark-energy', 
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039881_E_KIHONAKUENERUGI.jpg',

    location: 'pile',
  },
  {
    type: 'energy', 
    name: 'dark-energy', 
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039881_E_KIHONAKUENERUGI.jpg',

    location: 'pile',
  },
  {
    type: 'energy', 
    name: 'dark-energy', 
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039881_E_KIHONAKUENERUGI.jpg',

    location: 'pile',
  },
  {
    type: 'energy', 
    name: 'dark-energy', 
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039881_E_KIHONAKUENERUGI.jpg',

    location: 'pile',
  },
  {
    type: 'energy', 
    name: 'dark-energy', 
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039881_E_KIHONAKUENERUGI.jpg',

    location: 'pile',
  },
  {
    type: 'energy', 
    name: 'dark-energy', 
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039881_E_KIHONAKUENERUGI.jpg',

    location: 'pile',
  },
  {
    type: 'energy', 
    name: 'dark-energy', 
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039881_E_KIHONAKUENERUGI.jpg',

    location: 'pile',
  },
  {
    type: 'energy', 
    name: 'dark-energy', 
    src: 'https://www.pokemon-card.com/assets/images/card_images/large/SH/039881_E_KIHONAKUENERUGI.jpg',

    location: 'pile',
  },




  





]

let finalList = list
for(let i in finalList){
  finalList[i].index = parseInt(i)
}


let lucarioDeck = finalList

export {lucarioDeck}