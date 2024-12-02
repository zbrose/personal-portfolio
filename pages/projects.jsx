import Image from "next/image";

function Projects() {
    return (  
        <div className="container">
            <h1 style={{textAlign: 'center'}}>Personal Projects</h1>
            <section>
                <div className="aside">
                    <div>
                        <Image src='/images/whosshows.png' alt="image of whos shows app" 
                            width={500} height={300} 
                    />
                    </div> 
                    <div className="small-container">
                        <h2 className="subheader">Whos Show (2022)</h2>
                        <p>Whos Shows is a simple MERN stack application created for users to share concerts and events in one place.  I created this application because I wanted one location to find local events shared by friends of mine without the bloat of social media.  Instead of scrolling past an advertisement, a cat picture and a meme, my friends and I can find and upload shows with each other directly. </p>
                        <h4>Tech Used:</h4>
                        <div className="flex-box">
                            <div className="img-wrapper"><Image src='/images/javascript.png' alt='the javascript logo' width={50} height={50}/></div>
                            <div className="img-wrapper"><Image src='/images/html5.png' alt='the html 5 logo' width={50} height={50}/></div>
                            <div className="img-wrapper"><Image src='/images/css3.png' alt='the css3 logo' width={50} height={50}/></div>
                            <div className="img-wrapper"><Image src='/images/node-js.png' alt='the node js logo' width={50} height={50}/></div>
                            <div className="img-wrapper"><Image src='/images/express.png' alt='the express logo' width={50} height={50}/></div>
                            <div className="img-wrapper"><Image src='/images/mongodb (1).png' alt='the mongodb logo' width={50} height={50}/></div>
                            <div className="img-wrapper"><Image src='/images/react.png' alt='the react logo' width={50} height={50}/></div>
                        </div>
                        <div>
                            <a target='_blank' rel="noreferrer" className="link" href="https://62b64b4ff345050678b44cd2--friendly-trifle-312cf7.netlify.app">Deployed Project</a>
                            <a target='_blank' rel="noreferrer" className="link" href="https://github.com/zbrose/LA-client">Git Repository: Client </a>
                            <a target='_blank' rel="noreferrer" className="link" href="https://github.com/zbrose/whosshow-server">Git Repository: Server</a>
                        </div>
                    </div>

                </div>
                <div className="aside">
                    <div>
                        <Image src='/images/party-people.png' alt="image of party people app" 
                            width={500} height={300} 
                    />
                    </div> 
                    <div className="small-container">
                        <h2 className="subheader">The Party People App (2022)</h2>
                        <p>Party people is an app designed with the gathering in mind.  A MERN Stack appplication that allows users to create events as well as find and attend other users events.  Users can upload event details with images using cloudinary and use geolocation to find where an event is happening.</p>
                        <h4>Tech Used:</h4>
                        <div className="flex-box">
                            <div className="img-wrapper"><Image src='/images/javascript.png' alt='the javascript logo' width={50} height={50}/></div>
                            <div className="img-wrapper"><Image src='/images/html5.png' alt='the html 5 logo' width={50} height={50}/></div>
                            <div className="img-wrapper"><Image src='/images/css3.png' alt='the css3 logo' width={50} height={50}/></div>
                            <div className="img-wrapper"><Image src='/images/bootstrap.png' alt='the bootstrap logo' width={50} height={50}/></div>
                            <div className="img-wrapper"><Image src='/images/node-js.png' alt='the node js logo' width={50} height={50}/></div>
                            <div className="img-wrapper"><Image src='/images/express.png' alt='the express logo' width={50} height={50}/></div>
                            <div className="img-wrapper"><Image src='/images/mongodb (1).png' alt='the mongodb logo' width={50} height={50}/></div>
                            <div className="img-wrapper"><Image src='/images/react.png' alt='the react logo' width={50} height={50}/></div>
                        </div>
                        <div>
                            <a target='_blank' rel="noreferrer" className="link" href="https://party-people-app.netlify.app/">Deployed Project</a>
                            <a target='_blank' rel="noreferrer" className="link" href="https://github.com/zbrose/party-people-client">Git Repository: Client </a>
                            <a target='_blank' rel="noreferrer" className="link" href="https://github.com/zbrose/party-people-server-1">Git Repository: Server</a>
                        </div>
                    </div>

                </div>
                <div className="aside">
                    <div>

                        <Image src='/images/side-side.png' alt="image of party people app" 
                            width={500} height={300} 
                        />
                    </div>
                    <div className="small-container">
                        <h2 className="subheader">Side to Side: Virtual Record Collection (2022)</h2> 
                        <p>Side-Side is a music database and organization app in which a user can get information on recordings by artist name, record title, or song title using the Discogs Api. Users may view an albums information such as credits and track listing. Users are also able to bookmark and categorize records, adding them to a want-list or their growing collection.</p>
                        <h4>Tech Used:</h4>
                        <div className="flex-box">
                            <div className="img-wrapper"><Image src='/images/javascript.png' alt='the javascript logo' width={50} height={50}/></div>
                            <div className="img-wrapper"><Image src='/images/html5.png' alt='the html 5 logo' width={50} height={50}/></div>
                            <div className="img-wrapper"> <Image src='/images/css3.png' alt='the css3 logo' width={50} height={50}/></div>
                            <div className="img-wrapper"><Image src='/images/bootstrap.png' alt='the bootstrap logo' width={50} height={50}/></div>
                            <div className="img-wrapper"><Image src='/images/node-js.png' alt='the node js logo' width={50} height={50}/></div>
                            <div className="img-wrapper"><Image src='/images/postgresql.png' alt='the postgres logo' width={50} height={50}/></div>
                            <div className="img-wrapper"><Image src='/images/express.png' alt='the express logo' width={50} height={50}/></div>
                        </div>
                        <div>
                            <a target='_blank' rel="noreferrer" className="link" href="https://side-side.herokuapp.com/">Deployed Project</a>
                            <a target='_blank' rel="noreferrer" className="link" href="https://github.com/zbrose/unit-2-project">Git Repository</a>

                        </div>
                    </div>
                </div>
                <div className="aside">
                    <div>
                        <Image src='/images/song-birds-finished.png' alt="image of party people app" 
                            width={500} height={300} 
                        />
                    </div>
                    <div className="small-container">
                        <h2 className="subheader">Song-Birds (2022)</h2> 
                        <p>Song Birds is an educational music game that helps you improve your ear for melodies. The player is able to control five birds, each one assigned a single musical note that sounds when you select a bird at the bottom of the screen. The object of the game is to listen to a playback of a melody and match the melody using your birds&apos; beautiful singing voices and your own ears.</p>
                        <h4>Tech Used:</h4>
                        <div className="flex-box">
                            <div className="img-wrapper"><Image src='/images/javascript.png' alt='the javascript logo' width={50} height={50}/></div>
                            <div className="img-wrapper"><Image src='/images/html5.png' alt='the html 5 logo' width={50} height={50}/></div>
                            <div className="img-wrapper"><Image src='/images/css3.png' alt='the css3 logo' width={50} height={50}/></div>
                        </div>
                        <div>
                            <a target='_blank' rel="noreferrer" className="link" href="https://zbrose.github.io/song-birds/">Deployed Project</a>
                            <a target='_blank' rel="noreferrer" className="link" href="https://github.com/zbrose/song-birds">Git Repository</a>
                        </div>
                    </div>
                </div>
                <div className="aside">
                    <div>
                        <Image src='/images/Petit-ami-artwork.png' alt="image of petit ami app" 
                            width={500} height={300} 
                        />
                    </div>
                    <div className="small-container">
                        <h2 className="subheader">Petit Ami (2022)</h2> 
                        <p>Petit Ami is an iOS real-time pocket monster app created in Xcode using Swift. Users are able to adopt therir very own Ami companion which they can feed, play mini games with, and evolve</p>
                        <h4>Tech Used:</h4>
                        <div className="flex-box">
                            <div className="img-wrapper"><Image src='/images/swift.png' alt='the swift logo' width={50} height={50}/></div>
                            <div className="img-wrapper"><Image src='/images/mongodb (1).png' alt='the mongoDb logo logo' width={50} height={50}/></div>
                        </div>
                        <div>
                            <a className="link" href="#">Deployment Coming Soon!</a>
                            <a target='_blank' rel="noreferrer" className="link" href="https://github.com/zbrose/petit-ami-upstream">Git Repository</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
     
    );
}

export default Projects;