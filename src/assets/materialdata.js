export default [
    // pass: [12,9,11,15], // 패스 여부 & 갯수 [이스핀즈,차원회랑,개전,바칼]
    //seb_reward_material: [48, 48, 23, 31], // 계귀 재료 개수 [이스핀즈,차원회랑,개전,바칼] //2단 6개, 3단 12개, 초월 12개
    {
        name : '이스핀즈',
        buyneed : 480, //이스핀즈 필요 재료
        getitem : 96, // 3단 클리어시 획득 재료
        shareitem : 24, //계정 귀속 재료
        getpc : 12, // 피시방
        getpass : 12, // 아라드패스
    },
    {
        name : '차원회랑',
        buyneed : 360, // 차원회랑 필요 재료
        getitem : 54, // 3단 클리어시 획득 재료
        shareitem : 36,
        getpc : 3,
        getpass : 3,
    },
    {
        name : '기계 혁명 : 개전',
        subname : '개전',
        itemname01 : '폭룡왕의 인장',
        itemname02 : '용의 겁화',
        buyneed : [456, 440], // 필요 재료 ( 인장, 겁화 )
        getitem : [91, 10], // 개전 클리어시 획득 재료 (폭룡왕의 인장, 용의 겁화 )
        shareitem : 23,
        getpc : [11,1], // 폭룡왕의 인장, 용의 겁화 
        getpass : 1, 
    },
    {
        // buyneed2 : 440, // 용의 겁화 필요 재료 264 + 88 + 88
        name : '기계 혁명 : 바칼 레이드',
        subname : '바칼 레이드',
        itemname01 : '폭룡왕의 인장',
        itemname02 : '용의 겁화',
        buyneed : [456, 440], // 폭룡왕의 인장 필요 재료
        getitem : [121,44], // 바칼 클리어시 획득 재료 (폭룡왕의 인장, 용의 겁화 )
        shareitem : 31,
        getpc : [15, 4], //
        getpass : [15, 4],
    },
]