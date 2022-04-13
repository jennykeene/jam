export const API_DOMAIN = "https://newsapi.org/v2/top-headlines?country="
export const API_KEY = "fb61515de1e94ba594cf37eaea0e709f"


export const endpointPath = (country, category, page, pageSize) => `${API_DOMAIN}${country}&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`;
