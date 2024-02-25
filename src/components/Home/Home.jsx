import React from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <section className="dark:bg-black">
        <div className="bg-violet-400 dark:bg-black">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-200">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-200">
              Having a task management list can make things much easier.
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-200">
              Task Management List a list of tasks you need to complete or
              things that you want to do.
            </p>
            <div className="flex flex-wrap justify-center">
              <Link to="/addTask">
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg font-bold rounded bg-yellow-400 text-gray-900"
                >
                  Add Task
                </button>
              </Link>
            </div>
          </div>
        </div>
        <img
          src="https://www.officetimer.com/wp-content/uploads/2020/02/Untitled-design7.png"
          alt="Task Management list"
          className="w-5/6 mx-auto pb-12 -mt-20  rounded-xl lg:-mt-40 dark:bg-black bg-white"
        />
      </section>
      <Contact></Contact>
    </div>
  );
};

export default Home;
