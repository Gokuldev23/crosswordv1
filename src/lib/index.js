// place files you want to import through the `$lib` alias in this folder.



export let freeTierCW = [
    {
        name:'cross-word-1',
        img:'/cross-word-2.png'
    },
    {
        name:'cross-word-2',
        img:'/cross-word-2.png'
    },
    {
        name:'cross-word-3',
        img:'/cross-word-2.png'
    },
    {
        name:'cross-word-4',
        img:'/cross-word-2.png'
    },
    {
        name:'cross-word-5',
        img:'/cross-word-2.png'
    },
    {
        name:'cross-word-6',
        img:'/cross-word-2.png'
    },
    {
        name:'cross-word-7',
        img:'/cross-word-2.png'
    },
    {
        name:'cross-word-8',
        img:'/cross-word-2.png'
    },
    {
        name:'cross-word-9',
        img:'/cross-word-2.png'
    },
]


const randomValues = (arr) => {
    if(arr.length<=0) return

    let randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}

let randomStatus = ['continue','completed','new']

export let premiumTierCW = Array.from({ length: 100 }, (_, i) => ({
    name: `cross-word-${i + 1}`,
    img: '/cross-word-2.png',
    status:randomValues(randomStatus)
}));