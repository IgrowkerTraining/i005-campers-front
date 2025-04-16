import CampingResults from "@/components/CampingResults";
import CampingSearchBar from "@/components/CampingSearchBar"
import MainLayout from "@/layouts/MainLayout"



const SearchView: React.FC = () => {
    const handleSearch = (query: string) => {
      console.log('Buscando:', query);
    };
  
    const handleFilterChange = (filter: string) => {
      console.log('Filtro seleccionado:', filter);
    };
  
    return (
      <MainLayout>
        <CampingSearchBar onSearch={handleSearch} onFilterChange={handleFilterChange} />
        <CampingResults />
      </MainLayout>
    );
  };
  
  export default SearchView;