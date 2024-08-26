 export const posts = `
query publication {
    publication(host: "blog.developerdao.com") {
        isTeam
        title
        posts(first: 10) {
            edges {
                node {
                    title
                    brief
                    id
                    readTimeInMinutes
                    publishedAt
                }
            }
        }
    }
}

`;
export const post = `
query Post($id: ID!) {
  post(id: $id) {
   content {
   html
   }
}
}

`


