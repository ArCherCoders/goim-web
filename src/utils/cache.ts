enum CacheType {
	Local,
	Session

}
class Cache {
	storage: Storage

	constructor(type: CacheType) {
		this.storage = type === CacheType.Local ? localStorage : sessionStorage
	}

	setCache(key: string, value: any): void {
		if (key) {
			this.storage.setItem(key, JSON.stringify(value))
		}
	}

	getCache(key: string) {
		const item = this.storage.getItem(key);
		if (item) {
			return JSON.parse(item)
		}
	}

	removeCache(key: string) {
		this.storage.removeItem(key)
	}
	clearCache() {
		this.storage.clear()
	}

}


const localCache = new Cache(CacheType.Local)

const sessionCache = new Cache(CacheType.Session)
export {
	localCache,
	sessionCache
}
