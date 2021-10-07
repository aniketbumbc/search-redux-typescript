import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypeSelector } from '../hooks/useTypeSelector';

const RepoList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepo } = useActions();
  const { data, error, loading } = useTypeSelector((state) => state.repos);

  console.log(data, error, loading);

  const submitHandler = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    searchRepo(term);
  };

  return (
    <div onSubmit={submitHandler}>
      <form>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search Package</button>
      </form>

      {data && !!data.length && <h3> List of Repositories</h3>}
      {!data.length && <h3> No Repositories</h3>}

      {loading && <h4>loading.......</h4>}

      {!loading &&
        !error &&
        data &&
        data.map((repo) => <li key={repo}>{repo}</li>)}

      {error && <h4>{error}</h4>}
    </div>
  );
};

export default React.memo(RepoList);
