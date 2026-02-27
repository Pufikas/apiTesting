export default async function handler(req, res) {
    const response = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=pufikas727&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=1`
    );

    const data = await response.json();

    res.status(200).json(data);
}