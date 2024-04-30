import Image from "next/image";
import Navbar from "../includes/Navbar";
import Button from "../includes/Button";

export default function Hero(){
    return(
        <section>
            <div className="top">
                <Navbar/>
            </div>
             <section className="top">
                <div className="top text-center pt-6 pb-5">
                    <h1 className="mt-5  text-7xl underline">Your Money's Important</h1>
                    <h3 className="mt-4 text-5xl underline italic">so don't waste time</h3>
                    <p className="mt-4 text-2xl mb-3">with pricewice,you can track e-commerce product price <br/> 
                    and you can plan perfectly on when to buy these</p>
                    <Button href="#" title="Try a demo" />
                </div>
                <div className="bottom">
                    <Image
                     src="/assets/images/github.png"
                      alt="github" 
                      width={1300}
                      height={25}
                      className="ml-5"
                      />
                </div>
            </section>
        </section>
    );
}
