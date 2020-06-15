// For task purpose only

export default (req, res) => {
    res.statusCode = 200
    res.json({ products:[
            {
                id: 1,
                owner: {
                    name      : 'Olivia emma',
                    profileUrl: '/images/profiles/user2.jpg'
                },
                item: {
                    title       : 'Apple Watch',
                    price       : 'AED 5990',
                    caption     : 'Apple smartwatch with latest updates ',
                    hashtags    : '#apple #watch #smartWatch',
                    likeCount   : 32,
                    itemImageUrl: '/images/products/product2.jpg',
                    commentCount: 12,
                }
            },
            {
                id: 2,
                owner: {
                    name      : 'Noah william',
                    profileUrl: '/images/profiles/user1.jpg'
                },
                item: {
                    title       : 'Ladies smartphone cover',
                    price       : 'AED 500',
                    caption     : 'Best durable ladies smartphone cover',
                    hashtags    : '#smartPhone #mobiles #noon',
                    likeCount   : 89,
                    itemImageUrl: '/images/products/product1.jpg',
                    commentCount: 22,
                }
            },
            {
                id: 3,
                owner: {
                    name      : 'James',
                    profileUrl: '/images/profiles/user3.jpg'
                },
                item: {
                    title       : 'MacBook Air',
                    price       : 'AED 2900',
                    caption     : 'MacBook Air features a Retina display',
                    hashtags    : '#macBook #air #apple',
                    likeCount   : 129,
                    itemImageUrl: '/images/products/product3.jpg',
                    commentCount: 44,
                }
            },
            {
                id: 4,
                owner: {
                    name      : 'Ahamed',
                    profileUrl: '/images/profiles/user4.jpg'
                },
                item: {
                    title       : 'VR Glass 10',
                    price       : 'AED 899',
                    caption     : 'VR Glass 10 will transform your dream into reality.',
                    hashtags    : '#VRGlass #reality #tech',
                    likeCount   : 56,
                    itemImageUrl: '/images/products/product4.jpg',
                    commentCount: 11,
                }
            }
        ]
    });
}
