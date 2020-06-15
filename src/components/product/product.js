
const renderProducts = (products) => {
    if (products) {
        return products.map((product) => {
            const {
                id,
                item,
                owner,
            } = product;

            return(
                <div key={id} className="product">
                    <header>
                        <div className="product-user">
                            <div className="product-user-avatar">
                                <img
                                    src={owner.profileUrl}
                                    alt={owner.name}
                                />
                            </div>
                            <div className="product-user-nickname">
                                <span>{owner.name}</span>
                            </div>
                        </div>
                    </header>
                    <div className="product-image">
                        <div className="product-image-bg">
                            <div className="tint">
                                <img
                                    alt={item.title}
                                    src={item.itemImageUrl}
                                />
                            </div>
                            <div className="product-title-price">
                                {item.title}
                                <div className="product-price">
                                    {item.price}
                                </div>
                            </div>
                            <div className="product-favourite">
                                <i
                                    class="fa fa-heart favourite liked"
                                    aria-hidden="true"
                                i/>
                            </div>
                        </div>
                    </div>
                    <div className="product-details">
                        <div className="product-favourite">
                            <i class="fa fa-heart not-liked" aria-hidden="true"></i> 
                            <span className="like-count"> 32 Like</span>
                        </div>
                        <div className="product-caption">
                           Lorem ipsum summa erunda ellam sari awidum
                        </div>
                        <div className="product-hashtags">
                            #product #noon #elepahntToothpasete
                        </div>  
                        <div className="product-comment">
                            View all 12 Comments
                        </div>
                    </div>
                </div>
            );
        });
    }
}

const product = (props) => {
    const {
        allProducts,
    } = props;

    return (
        <div className="all-products">
            {renderProducts(allProducts)}
        </div>
    );
}

export default product;
