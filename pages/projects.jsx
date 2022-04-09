import Image from "next/image";

function Projects() {
    return (  
        <div>
            <h1 style={{textAlign: 'center'}}>Projects</h1>
            <section>
                <div className="aside">
                    <Image src='/images/party-people.png' alt="image of party people app" 
                        width={500} height={300}
                    />
                    <div className="small-container">
                        <h2>The Party People App</h2>
                        <p>Party people is an app designed with the gathering in mind. Want to find out where the latest ragers, raves or LAN parties are happening? We got you! Sign-up and create a free acount to start viewing events. Heck, maybe you even want to throw a party of your own. The limit is as high as you can get your hands! Let's Party!</p>
                        <div>
                            <h4>Tech Used:</h4>
                            <Image src='/images/javascript.png' alt='the javascript logo' width={50} height={50}/>
                            <Image src='/images/html5.png' alt='the html 5 logo' width={50} height={50}/>
                            <Image src='/images/css3.png' alt='the css3 logo' width={50} height={50}/>
                            <Image src='/images/node-js.png' alt='the node js logo' width={50} height={50}/>
                            <Image src='/images/express.png' alt='the express logo' width={50} height={50}/>
                            <Image src='/images/mongodb (1).png' alt='the mongodb logo' width={50} height={50}/>
                            <Image src='/images/react.png' alt='the react logo' width={50} height={50}/>
                        </div>
                        <a href="https://github.com/zbrose/party-people-client">Git Repository: Client </a>
                        <a href="https://github.com/zbrose/party-people-server-1">Git Repository: Server</a>
                        <a href="https://party-people-app.netlify.app/">Deployed Project</a>
                    </div>

                </div>
                <div className="aside">
                    <Image src='/images/side-side.png' alt="image of party people app" 
                        width={500} height={300}
                    />
                    <div className="small-container">
                        <h2>Side-Side: Virtual Record Collection</h2> 
                        <p>Side-Side is a music database and organization app in which a user can get information on recordings by artist name, record title, or song title using the Discogs Api. Users may view an albums information such as credits and track listing. Users are also able to bookmark and categorize records, adding them to a want-list or their growing collection.</p>
                        <div>
                            <h4>Tech Used:</h4>
                            <Image src='/images/javascript.png' alt='the javascript logo' width={50} height={50}/>
                            <Image src='/images/html5.png' alt='the html 5 logo' width={50} height={50}/>
                            <Image src='/images/css3.png' alt='the css3 logo' width={50} height={50}/>
                            <Image src='/images/node-js.png' alt='the node js logo' width={50} height={50}/>
                            <Image src='/images/postgresql.png' alt='the postgres logo' width={50} height={50}/>
                            <Image src='/images/express.png' alt='the express logo' width={50} height={50}/>
                        </div>
                        <a href="https://side-side.herokuapp.com/">Deployed Project</a>
                        <a href="https://github.com/zbrose/unit-2-project">Git Repository</a>
                    </div>
                </div>
                <div className="aside">
                    <Image src='/images/song-birds-finished.png' alt="image of party people app" 
                        width={500} height={300}
                    />
                    <div className="small-container">
                        <h2>Song-Birds</h2> 
                        <p>Song Birds is an educational music game that helps you improve your ear for melodies. The player is able to control five birds, each one assigned a single musical note that sounds when you select a bird at the bottom of the screen. The object of the game is to listen to a playback of a melody and match the melody using your birds' beautiful singing voices and your own ears.</p>
                        <div>
                            <h4>Tech Used:</h4>
                            <Image src='/images/javascript.png' alt='the javascript logo' width={50} height={50}/>
                            <Image src='/images/html5.png' alt='the html 5 logo' width={50} height={50}/>
                            <Image src='/images/css3.png' alt='the css3 logo' width={50} height={50}/>
                        </div>
                        <div>
                            <a href="https://zbrose.github.io/sei-projectone-song-birds/">Deployed Project</a>
                            <a href="https://github.com/zbrose/sei-projectone-song-birds">Git Repository</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
     
    );
}

export default Projects;