interface ExternalLink {
    external_urls: { spotify: string };
}

export function getExternalUrl(externalLink: ExternalLink): string {
    return externalLink.external_urls.spotify;
}
