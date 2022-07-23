import axios, { AxiosInstance } from 'axios';

export const tracksApi = (token: string) =>
    axios.create({
        baseURL: 'https://api.spotify.com/v1/',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

export const getTracksBySearch =
    (api: AxiosInstance) =>
    async (search: string): Promise<SpotifyApi.TrackSearchResponse> => {
        return api.get(`search?q=${search}&type=track&offset=1`).then((res) => res.data);
    };

export const getTracksById =
    (api: AxiosInstance) =>
    async (id: string): Promise<SpotifyApi.TrackObjectFull> => {
        return api.get(`tracks/${id}`).then((res) => res.data);
    };
