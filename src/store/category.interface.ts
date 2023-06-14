export interface ICategory {
	id: number
	name: string
	slug: string
}

export interface ICategoryCreate {
	name: string
}

export interface ICategoryUpdate {
	name: string
	slug: string
}
