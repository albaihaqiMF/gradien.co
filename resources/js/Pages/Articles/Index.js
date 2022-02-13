import { Head } from '@inertiajs/inertia-react';
import React from 'react';

const Index = props => {
  return (
    <>
      <Head title="Articles" />
      <div className="grid w-full grid-cols-3 gap-3">
        {props.data &&
          props.data.map((article, index) => {
            return (
              <div key={index} className="p-4 rounded shadow bg-slate-50">
                <h1 className="text-lg font-extrabold">{article.title}</h1>
                <p>{article.created_by && article.created_by.name}</p>
                <p className='p-2 bg-white rounded'>{article.text}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Index;
