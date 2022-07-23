export const getReturnedParamsFromSpotifyAuth = (hash: string): Record<string, string> => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split('&');

  return paramsInUrl.reduce<Record<string, string>>((acc, currentValue) => {
    const [key, value] = currentValue.split('=');
    acc[key] = value;
    return acc;
  }, {});
};
