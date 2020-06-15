import Layout from '../components/layout';
import Product from '../components/product/product';
import NavBar from '../components/Navigation/navigationBar';

export default function Home({products}) {
    return (
        <Layout>
            <NavBar/>
            <div>
                <Product
                    allProducts={products}
                />
            </div>
        </Layout>
    );
}

export async function getStaticProps(){
    const res  = await fetch(`http://localhost:3000/api/products`);
    const data = await res.json()

    return {
        props: {
            products: data.products,
        }
    };
}
