export const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)

export const getEpisodesIdList = (episodesList) => {
    return episodesList.map(episode => getLastItem(episode))
}
