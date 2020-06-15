import React, { Component }  from 'react';
import Layout from '../components/layout';
import Product from '../components/product/product';
import NavBar from '../components/Navigation/navigationBar';

class Home extends Component {
    state = {
        isHomeView: true,
        favourites: [],
    }

    /**
     * Handle Favourites
     * Add and remove favourites from state
     * 
     * @param {int} productId 
     */
    handleFavourite = (productId) => {
        let {
            favourites,
        } = this.state;

        if (favourites.includes(productId)) {
            favourites = favourites.filter(function(favourite) {
                return favourite !== productId
            });
        } else {
            favourites.push(productId);
        }

        this.setState({
            favourites,
        });
    }

    /**
     * Handle Navigation
     * toggle trough Home and Favorites tab
     * 
     * @param {string} option 
     */
    handleNavigation = (option) => {
        let {
            isHomeView,
        } = this.state;

        switch (option) {
            case 'HOME':
                isHomeView = true;
                break;

            case 'FAV':
                isHomeView = false;
                break;

            default:
                break;
        }

        this.setState({
            isHomeView,
        });
    }

    render() {
        const {
            products,
        } = this.props;

        const {
            favourites,
            isHomeView,
        } = this.state;

        return (
            <Layout>
                <NavBar
                    handleNavigation={this.handleNavigation}
                />
                <div>
                    <Product
                        isHomeView={isHomeView}
                        favourites={favourites}
                        handleFavourite={this.handleFavourite}
                        allProducts={products}
                    />
                </div>
            </Layout>
        );
    }
}

export async function getStaticProps(){
    // Update the proxy with your host address
    const proxy = 'http://localhost:3000';
    const res   = await fetch(`${proxy}/api/products`);
    const data  = await res.json()

    return {
        props: {
            products: data.products,
        }
    };
}

export default Home;
