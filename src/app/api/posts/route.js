export async function GET(request) {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
                        .then((response) => response.json()) 
    return Response.json({posts: [...posts]})
}