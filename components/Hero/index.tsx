import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import HomeHeroImg from 'public/home_hero.jpg'

interface HeroProps {
    title?: string
    children?: string
    subtitle?: string
    ttu?: string
    img?: string
}

const Hero: FunctionComponent<HeroProps> = ({
    img = 'https://i.udemycdn.com/course/750x422/1652608_662b_8.jpg',
    subtitle = 'Check my portfolio and video tutorials',
    title = "Hey I'm Filip. Experienced full stack developer",
    ttu = 'See my work',
    children,
}) => {
    return (
        <section className="fj-hero">
            <div className="fj-hero-wrapper row">
                <div className="hero-left col-md-6">
                    <h1 className="white hero-title">{children || title}</h1>
                    <h2 className="white hero-subtitle">{subtitle}</h2>
                    <div className="button-container">
                        <a href="" className="btn btn-main bg-blue ttu">
                            {ttu}
                        </a>
                    </div>
                </div>
                <div className="hero-right col-md-6">
                    <div className="hero-image-container">
                        <a className="grow hero-link">
                            <Image
                                src={HomeHeroImg}
                                className="hero-image"
                                alt={title}
                                width="350px"
                                height="350px"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
