const resolvers = {
    Query: {

        // tracksForHome: (parent, args, context, info) => { }
        tracksForHome: (_, __, { dataSources }) => dataSources.trackAPI.getTracksForHome(),

    },
    Track: {
        author: ({ authorId }, _, { dataSources }) => dataSources.trackAPI.getAuthor(authorId)
    }

}


module.exports = resolvers