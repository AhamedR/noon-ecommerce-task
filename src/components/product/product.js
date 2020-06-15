
import React, { Component }  from 'react';

class products extends Component {
    /**
     * Render Products accordingly
     * Favourites and Default home Items
     * 
     * @param {array} products 
     */
    renderProducts = (products) => {
        const {
            favourites,
            isHomeView,
        } = this.props;

        // If viewing favourites tab and no favourites yet
        if (!isHomeView && favourites.length === 0) {
            return (
                <div className="no-favourites">
                    No favourites yet!
                </div>
            )
        }

        if (products) {
            return products.map((product) => {
                const {
                    id,
                    item,
                    owner,
                } = product;

                const favouriteStyle = favourites.includes(id) ?
                    'liked' :
                    'not-liked';

                const likeCount = favourites.includes(id) ?
                    item.likeCount + 1 :
                    item.likeCount;

                if (!isHomeView && !favourites.includes(id)) {
                    return;
                }

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
                                    <div className="product-title">
                                        {item.title}
                                    </div>
                                    <div className="product-price">
                                        {item.price}
                                    </div>
                                </div>
                                <div className="product-favourite">
                                    <i
                                        onClick={() => this.props.handleFavourite(id)}
                                        className={`fa fa-heart favourite ${favouriteStyle}`}
                                        aria-hidden="true"
                                    >
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="product-favourite">
                                <i
                                    onClick={() => this.props.handleFavourite(id)}
                                    className={`fa fa-heart ${favouriteStyle}`}
                                    aria-hidden="true"
                                ></i>
                                <span className="like-count"> {likeCount} Like</span>
                            </div>
                            <div className="product-caption">
                               {item.caption}
                            </div>
                            <div className="product-hashtags">
                                {item.hashtags}
                            </div>
                            <div className="product-comment">
                                View all {item.commentCount} Comments
                            </div>
                        </div>
                    </div>
                );
            });
        }
    }

    render() {
        const {
            allProducts,
        } = this.props;

        return (
            <div className="all-products">
                {this.renderProducts(allProducts)}
            </div>
        );
    }
}

export default products;
