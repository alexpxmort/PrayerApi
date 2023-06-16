
const findVideosByQuery = (arr,query = 'Padre Mario Sartori') => {
    return arr.filter((video) => video.channelTitle?.includes(query) )
}

const THEMES_PRAYERS = [
`amor pregacao`,
`perdao pregacao`,
`vida financeira pregacao`,
`humildade pregacao`,
`senhorio de jesus pregacao`,
'vontade de Deus pregação',
'Pecado da inveja pregação',
'Virgem Maria pregação',
'São José pregação',
'Familia pregacao',
'Conversao pregacao',
'Orar e vigiar pregcao',
'Adoração pregacao',
'Autoestima  pregacao',
'Curando as feridas dos relacionamentos mal resolvidos pregacao',
'Deus tem um propósito em minha vida pregacao',
'Tudo é dom de Deus  pregacao',
'Confiar em Deus pregacao'
]

const getPrayerWord = ()=>{
const themes= [...THEMES_PRAYERS];
return themes[Math.floor(Math.random() * themes.length)];
}
export {findVideosByQuery,getPrayerWord}