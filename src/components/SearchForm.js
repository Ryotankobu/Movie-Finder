import React from 'react'

const SearchForm = ({ handleSubmit, searchWord }) => {
  return (
    <>
      <div class="d-flex justify-content-center mt-5 mb-3">
        <div className="col-md-6 col-sm-8 mb-8">
          <form>
            <input
              type="text"
              value={searchWord}
              onChange={(e) => handleSubmit(e.target.value)}
              placeholder="movie title"
              class="form-control input-lg"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchForm