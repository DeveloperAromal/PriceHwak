import Image from "next/image";
import Navbar from "../includes/Navbar";
import Button from "../includes/Button";
import "@fontsource/dancing-script";


export default function Hero(){
    return(
        <section className="px-8">
            <div className="top">
                <Navbar/>
            </div>
             <section className="top">
                <div className="top text-center pt-6 pb-5">
                    <h1 className="mt-5 text-3xl lg:text-7xl md:text-5xl sm:text-4xl">Your Money's Important</h1>
                    <h3 className="mt-4 text-2xl lg:text-6xl md:text-4xl sm:text-3xl" style={{ fontFamily: "Dancing Script" }}>so don't waste time</h3>
                    <p className="mt-4 text-center text-xl lg:text-2xl md:text-2xl sm:text-2xl mb-3">with pricewice,you can track e-commerce product price <br/> 
                    and you can plan perfectly on when to buy these</p>
                    <Button href="/auth/v1/signup" title="Try a demo" />
                </div>
                <div className="flex box-shad items-center justify-center pt-44">
                    <Image
                      src="/assets/images/github.png"
                      alt="github" 
                      width={1300}
                      height={25}
                      className=""
                      />
                </div>
            </section>
        </section>
    );
}
