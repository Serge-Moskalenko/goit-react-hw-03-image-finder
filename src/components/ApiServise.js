import axios from "axios";

export class ApiServise{
    constructor(){
        this.searchQuery = "";
        this.page = 1;
    };

    async fetch(){
    
        try {
          const searchParams = new URLSearchParams({
            key: '30433479-40b3b6ba46d38a0b1e7112d23',
            q: this.searchQuery,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            page: this.page,
            per_page: 12,
        });

        const request = `https://pixabay.com/api/?${searchParams}`;

        const data = await axios.get(request);
       
        this.incrementPage();
            return data;  
        } catch (error) {
            console.log(error.message)
        };
        
    };
    
    get query() {
        return this.searchQuery;
    };

    set query(newQuery) {
        this.searchQuery = newQuery;
    };

    incrementPage() {
        this.page +=1
    };

    resetPage() {
        this.page = 1;
    }
};
