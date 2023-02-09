import classes from './hero.module.css';
import Image from 'next/image';
function Hero() {
    return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image 
                src="/images/site/max.png" 
                alt="An image showing Max" 
                width = {300} 
                height={300}>
            </Image>
        </div>
        <h1>Hi, i'm Max</h1>
        <p>I am software Engineer </p>
    </section>
    );  
}

export default Hero;