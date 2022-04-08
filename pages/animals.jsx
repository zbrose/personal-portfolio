import axios from "axios";

function Animals({data}) {
    return (  
        <h1>Random Animal: {data.random}</h1>
    );
}

export default Animals;

//export a function called getStaticProps
    // whaetver is returned, becomes data prop in our components

export async function getStaticProps(){
    // all of our ajax/axios/fetch here
    // we can call external API express backends next backend
    const {data} = await axios.get(`${process.env.SERVER_URL}/api/animals`)
    console.log(data)

    return {
        props: {data, otherProp: 'hi' } // there are available to us in the component

    }
}