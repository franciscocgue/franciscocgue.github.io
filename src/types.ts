interface EntryType {
    date: Date | string,
    title: string,
    summary?: string,
    content: React.ReactNode,
    keywords: String[]
}

export {
    type EntryType,
}