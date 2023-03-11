import React from "react";
import scores from '../figures/jwpep/jwpepper_scores.csv'
import grades from '../figures/jwpep/workbylevel.png'
import topcomp from '../figures/jwpep/topcomp.png'

export function JWPepper() {
    return(
        <div>
            <h4>March 11, 2023</h4>
            <p>
                This week, I spent some time learning how to scrape data from the web using Python. I was wondering how some of these huge datasets came about without someone having to enter thousands of entries manually. It turns out not to be that difficult. After a little practice, I turned my sights to the sheet music vendor <a href='https://www.jwpepper.com/sheet-music/welcome.jsp' target='_blank' rel='noreferrer'>JW Pepper</a>. Anyone who has spent time in music education will recognize JW Pepper as a main source for purchasing new sheet music for middle and high school ensembles. 
            </p>
            <p>
                JW Pepper has 1740 original works for string orchestra listed on their website. These works are organized into different grade levels to help directors decide what pieces would be appropriate for their ensembles. I went through and generated a .csv file of all of these <a href={scores}>scores.</a> This dataset contains the titles, composers, and grade levels of each piece. 
            </p>
            <p>
                As might be expected, JW Pepper mostly sells scores aimed at intermediate and beginning students. The following chart displays the breakdown of pieces by level.
            </p>
            <a href={grades} target='_blank' rel='noreferrer'><img src={grades} alt="Bar chart displaying frequency of each grade level on JW Pepper" className="figure"/></a> 
            <p>
                I was also curious about who the most represented composers were. Richard Meyer, Doug Spata, and Brian Balmages top the list.
            </p>
            <a href={topcomp} target='_blank' rel='noreferrer'><img src={topcomp} alt="Bar chart displaying composers with more than 10 works for sale on JW Pepper" className="figure"/></a>
            <p>
                Once again, this is more a proof of concept than a super useful application, but it was a surprisingly fun little project this week. 
            </p>
        </div>
    )
}