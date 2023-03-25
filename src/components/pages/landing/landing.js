import React from "react";
import { Archive } from "./archive";

export function Landing() {
    return(
        <div>
            <div className="content">
                <h2>Updates</h2>
                <h4>March 25, 2023</h4>
                <p>The most recent updates to the site have been somewhat quiet. As I laid out in the last update, I wanted to work on the styling some. I ended learning the basics of using Bootstrap and implementing it to tweak some of the style of the page. It's probably most noticeable on the navigation bar, though it's quite minor. At some point, I would like to do a full overhaul of the styling to fully incorporate Boostrap.</p>
                <p>Another small, but important change has been the implentation of React Router. This whole site has been created using the React.js frontend library. The advantage of React is that you are able to have your site reload only the parts of a page that change, instead of reloading the entire page each time there is a change (like a more traditional site). One side effect of this is that the URL does not change when you navigate to different parts of the site. Instead of actually navigating to a new page, the site simply loads different content on the page. In order to create the effect of navigation, I wrote some cumbersome code to make the navigation bar work. Fortunately, there exists another library called React Router that handles this issue.</p>
                <p>Long story short, you will now notice that the URL does change as you navigate around the site. This also allows me to link directly to a particlar section of the site.</p>
                <p>The final update has been up for a while under the "Data" heading. As a small culmination of learning Python and data analysis, I created a spreadsheet of all String Orchestra pieces listed for sale by the vendor JW Pepper. This involved web scraping with BeautifulSoup and cleaning the data to make it useful. I also was able to make a prototype in Node.js of making the data into a searchable database through the website. Unfortunately, I still need to learn more about databases and backend stuff to be able to get that deployed.</p>
                <p>If any of my friends out there are learning a touch of programming themselves, I have also made the code for this website public at the GitHub repository located in the footer.</p>
            </div>  
            <Archive />
        </div>
    )
}