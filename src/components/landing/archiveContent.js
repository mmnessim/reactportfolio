import React from "react";

export function ArchiveContent() {
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
            <div className="content">
                <h4>March 5, 2023</h4>
                    <p>
                        It has been a while since I've updated the site, but I am back! February was a crazy month. I had numerous work obligations, then I got covid, which set me back a spell. I've also been taking a break from web development and learning more about data science and Python, which is not always as easy to apply on a portfolio site like this. While work is as busy and chaotic as ever, I have a few goals for the site in the near-mid future:
                    </p>
                    <ul className="list">
                        <li>Use React Router to ease navigation</li>
                        <li>Divide site into music portfolio and programming portfolio</li>
                        <li>Update styling</li>
                        <li>Provide more detail about specifics of coding skills and implementation</li>
                        <li>Clean up code in general</li>
                    </ul>
                    <p>
                        Some of these things might be indefinitely put on the backburner, depending on how crazy work it. The Spring semester is truly a hectic time for teachers. Nevertheless, I'll keep chipping away on weekends and when I have some free time. As for right now, check out the new "Data" tab for a touch of data analysis. 
                    </p>
            </div>
        <div className="content">
            <h4>February 4, 2023</h4> 
                    <p>
                        Welcome to the page! If you've been here before, you may have noticed a few style changes, as well as a new "Interactive" tab in the navigation menu. The great thing about React is interactivity, so I've been implementing a few simple things over there to practice things I've been learning. So far there are a couple tools to change the colors of the site, as well as a timer that keeps track of how long you are on that particular tab, and a tool that suggests 10 words that sound like your entry. Now, none of these are particularly useful, but they have been fun little coding tasks for me. 
                    </p>
                    <p>
                        What I would like to work on sometime soon is maybe a very primitive game to add to the interactive tab. I think I have the capabilities to implement a couple different things, but time is always precious, so I don't know if or when that will happen. I've moved on to learning more about Backend development techniques, which do not yet have many obvious implementations on this page, so things might not change much in the next few weeks. 
                    </p>
                    <h4>January 27, 2023</h4>
                    <p>The most recent update to the site is that I've figured out how to link the pdfs to my arrangements. This would be very simple in a static site, but it turns out it's a bit different in React. Now, it's just a matter of finding the time to implement it for the rest of the pdfs. Up next, I am considering changing the styling of the page to something more appealing. Everything is a bit too green and plain right now. I could also use a few more pictures probably. I would also like to add an area for interactive elements to practice a few things.</p>
                    <h4>January 20, 2023</h4>
                    <p>Welcome to an in-development web portfolio written in React.js. I intend for this website to be an place to display and test some of the things that I've been learning. At the moment, I am just filling out the basic structure of the page, such as the different sections, content, and functionality. Don't be surprised if things look wonky, or if something is broken. Almost everything at this point is a placeholder, including the color scheme and styling.</p>
                    <p>All that being said, welcome and feel free to poke around. I'm hoping to make this a more inviting page soon!</p>
        </div>
        </div>
    )
}