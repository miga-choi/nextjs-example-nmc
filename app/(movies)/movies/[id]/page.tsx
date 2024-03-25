import {API_URL} from "../../../(home)/page";

async function getMovie(id: string) {
    console.log(`Fetching movies: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

async function getVideos(id: string) {
    console.log(`Fetching videos: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieDetail({params: {id}}: { params: { id: string } }) {
    console.log(`Start fetching: ${Date.now()}`);
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    console.log(`End fetching: ${Date.now()}`);
    return (
        <h1>{movie.title}</h1>
    );
}