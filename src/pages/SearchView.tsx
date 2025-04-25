import { useState } from 'react';
import { useCampingStore } from "@/store/CampingStore";
import CampingResults from "@/components/CampingResults";
import CampingSearchBar from "@/components/CampingSearchBar";
import MainLayout from "@/layouts/MainLayout";

const SearchView: React.FC = () => {
  const { searchCampings } = useCampingStore();
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('');

  const handleSearch = (query: string) => {
    setSearchText(query);
    searchCampings({ search: query, filter });
  };

  const handleFilterChange = (selectedFilter: string) => {
    setFilter(selectedFilter);
    searchCampings({ search: searchText, filter: selectedFilter });
  };

  return (
    <MainLayout>
      <CampingSearchBar onSearch={handleSearch} onFilterChange={handleFilterChange} />
      <CampingResults />
    </MainLayout>
  );
};

export default SearchView;