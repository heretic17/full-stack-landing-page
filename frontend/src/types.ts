type ItemTypes = {
    id: number,
    author: {
        id: number,
        username: string
    }
    title: string,
    images: [{image: string}],
    description: string,
    tags: []
}

type Props = {
    data: ItemTypes[]
}

export type { ItemTypes, Props };