import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Image
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/Container Home.jpeg"
          alt="Sarah Dayan"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              A home is a special place where we feel safe and comfortable.
              It is not just a building.It is where we share our lives with family and friends. 
              A home is filled with memories and moments that make us feel happy and loved.
              It is where we can be ourselves and find peace after a long day.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Hafsa Azhar
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Student, Ryk
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Page;