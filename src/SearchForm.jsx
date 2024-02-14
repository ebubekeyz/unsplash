import { useGlobalContext } from './context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    const searchInput = e.target.elements.search.value;
    e.preventDefault();
    if (!searchInput) return;
    setSearchTerm(searchInput);
    console.log(searchInput);
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          className="form-input search-input"
          placeholder="search"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
