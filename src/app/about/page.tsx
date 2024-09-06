import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Image
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/Home icon.jpeg"
          alt="Sarah Dayan"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
             A home is more than just four walls and a roof.
             It is a place where we can truly relax and be ourselves.
             Whether it ia small apartment or a big house.A home is where we can find comfort and warmth.
             It is a place that reflects who we are and where we can always come back to after being out in the world.
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