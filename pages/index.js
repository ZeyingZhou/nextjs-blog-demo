import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";
function HomePage(props) {

    return (
        <Fragment>
            <Head>
                <title>Max' blog</title>
                <meta 
                name='description'
                content='I post about programming and web dev'></meta>
            </Head>
            <Hero></Hero>
            <FeaturedPosts posts={props.posts}></FeaturedPosts>
        </Fragment>
    );
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        }
    }
    
}
export default HomePage;

