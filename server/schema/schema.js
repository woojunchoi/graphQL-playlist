const graphql = require('graphql')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema
} = graphql

const BookType = new GraphQLObjectType({
   name: 'Book',
   fields: () =>({
       id: {type: GraphQLString},
       name: {type: GraphQLString},
       genre : {type: GraphQLString}
   })
})

const RootQuery = new GraphQLObjectType({
    name:'RootQuery',
    fields:() => ({
        book: {
            type: BookType,
            args:{
                id:{type:GraphQLString}
            },
            resolve(parentValue, args) {
                args.id
            }
        }
    })
})

module.exports = new GraphQLSchema({
    query:RootQuery
})