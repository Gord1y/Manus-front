export const getLocalStorage = (name: string) => {
	if (typeof localStorage !== 'undefined') {
		const Is = localStorage.getItem(name)
		return Is ? JSON.parse(Is) : null
	}
	return null
}
