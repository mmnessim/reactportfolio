import React from "react";
import comp from '../figures/comp.png';
import '../data.css'
import verdi from '../figures/verdi.png';

export function Opera() {
    return (
        <div>
            <h4>March 5, 2023</h4>
            <p>
                To practice some of the data science skills I have been learning, I have been applying them on <a href='https://data.world/popculture/global-opera-performances' target='_blank' rel='noreferrer'>this dataset</a>. It is a collection of information about opera performances from around the world over 6 seasons. There are 33,122 entries, spanning 75 countries, 1,277 cities, 1,416 composers, and 2,857 different works. 
            </p>
            <p>
                I've only dipped my toes into this data in my effort to practice some Python skills, but it has revealed some interesting things. One question I had was which composers were most performed. The following graph plots how often each of the top 10 composers appears in this dataset. 
            </p>
            <a href={comp} target='_blank' rel="noreferrer"><img src={comp} alt='Count plot of top 10 opera composers from 2012 to 2018' className="figure"/></a>
            <p>
                The results are not surprising. I did not expect to see Tchaikovsky on there, as I thought opera companies would shy away from Russian language operas, but otherwise it's very much in accordance with my expectations. These 10 composers made up 18,996 entries in this dataset, or 57.35% of all entries. Again, this is a fairly typical trend in modern classical music performances. The most programmed composers tend to be a select few. 574 composers appeared only one time in this dataset. 
            </p>
            <p>
                When we look at some of the most performed composers, such as Verdi, we see again that few works make up the majority of performances.
            </p>
            <a href={verdi} target='_blank' rel='noreferrer'><img src={verdi} alt="Count plot of Verdi's operas" className="figure" /></a>
            <p>
                I've only dipped my toes into this data, but I am finding it surprisingly enjoyable. In the coming weeks, I'll continue to work with this data and refine my Python and data visualization skills.
            </p>
        </div>
    )
}