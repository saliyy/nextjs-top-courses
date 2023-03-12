export interface PageItem {
    title: string;
    _id: string;
    category: string;
    alias: string;
}

export interface MenuItem {
    _id: {
        secondCategory: string;
    };
    pages: PageItem[];
}
