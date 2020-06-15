// For task purpose only

export default (req, res) => {
    res.statusCode = 200
    res.json({ products:[
            {
                id: 1,
                owner: {
                    name      : 'Jone Doe',
                    profileUrl: '/images/profiles/user1.jpg'
                },
                item: {
                    title       : 'title',
                    price       : 'AED 500',
                    caption     : 'Lorem ipsum',
                    hashtags    : '#hashtags',
                    likeCount   : 32,
                    itemImageUrl: '/images/products/product1.jpg',
                    commentCount: 12,
                }
            },
            {
                id: 2,
                owner: {
                    name      : 'Ahamed',
                    profileUrl: '/images/profiles/user2.jpg'
                },
                item: {
                    title       : 'title',
                    price       : 'AED 500',
                    caption     : 'Lorem ipsum',
                    hashtags    : '#hashtags',
                    likeCount   : 32,
                    itemImageUrl: '/images/products/product2.jpg',
                    commentCount: 12,
                }
            },
            {
                id: 3,
                owner: {
                    name      : 'Ahamed',
                    profileUrl: '/images/profiles/user3.jpg'
                },
                item: {
                    title       : 'title',
                    price       : 'AED 500',
                    caption     : 'Lorem ipsum',
                    hashtags    : '#hashtags',
                    likeCount   : 32,
                    itemImageUrl: '/images/products/product3.jpg',
                    commentCount: 12,
                }
            },
            {
                id: 4,
                owner: {
                    name      : 'Ahamed',
                    profileUrl: '/images/profiles/user4.jpg'
                },
                item: {
                    title       : 'title',
                    price       : 'AED 500',
                    caption     : 'Lorem ipsum',
                    hashtags    : '#hashtags',
                    likeCount   : 32,
                    itemImageUrl: '/images/products/product4.jpg',
                    commentCount: 12,
                }
            }
        ]
    });
}
