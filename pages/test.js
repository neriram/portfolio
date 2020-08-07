export default function Test({queryParam}) {
    let name = queryParam
    return (
        <h1>Hello!{name}</h1>
    )
}

export function getServerSideProps({query}) {
    //get query param from url
    let queryParam = query.name

    return {
        props: {
            queryParam,
        }
    }
}