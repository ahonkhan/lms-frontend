export const ClassCard = () => {
  return (
    <div className="course-card cursor-pointer flex items-center  gap-x-4 px-4 py-4 rounded-lg bg-base-2">
      {/* <div className="course-photo w-[40%]">
        <img
          src="https://dream-software.vercel.app/_next/static/media/frontend-hero.af921956.png"
          alt=""
          className="rounded"
        />
      </div> */}
      <div className="course-details  w-full">
        <h3 className="title text-base xl:text-lg leading-6">
          Frontend Web development with react js
        </h3>
        <p className="topic mt-1 text-sm xl:text-base leading-6">
          <span>Topic: </span>
          Module 80 | JavaScript Project development part - 1
        </p>
        <div className="mt-1 md:mt-3 lg:mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-4">
          <div className="module-total">
            <p className="text-sm text-primary">Ongoing live class</p>
          </div>
          <div className="module-total">
            <button className="bg-green-600 active:scale-[0.98] duration-150 group gap-x-2 px-8 rounded-lg font-medium text-white text-center flex items-center justify-center py-2">
              Join now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
