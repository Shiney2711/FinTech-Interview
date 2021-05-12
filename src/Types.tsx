export interface Data {
    Title: string,
    Cost: number,
    BookCategory: string
}

export interface AppState {
    data: Data[], 
    gotError: Boolean
}

export interface BookListProps {
    data: Data[],
    gotError: Boolean
}

export interface UpdateButtonProps {
    fetchData: Function, 
    gotError: Boolean
}

export interface UpdateButtonState {
    url: string
}