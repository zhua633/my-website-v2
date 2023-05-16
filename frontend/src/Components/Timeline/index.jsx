
import React from 'react';

function Timeline() {
  return (
  <div class="w-full justify-center flex px-20 pb-20">

<ol class="relative border-l border-gray-200 dark:border-gray-700">                  
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Feb 2023 - Now</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> Movio</h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Responsible for ingesting movie analytics data from Postgres database and exposing relevant data to the UI using GraphQL in the data warehousing team. Developing dynamic and responsive user interfaces using React and Redux during the front-end rotation.</p>
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Apr 2022 – Sep 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Risos Enterprise</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Implemented Python OpenCV library and signal processing techniques to identify water pathogens accurately. Implemented machine learning algorithm using TensorFlow & Google Colab to achieve image superresolution.</p>
    </li>
    <li class="ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Nov 2021- Feb 2022</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Honeywell</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Implemented embedded controller logic and monitored upload to the point cloud server for the IoT data transmission via programming with company software. Developed GUI enabling accessible remote control for the HVAC system.</p>
    </li>
</ol>

</div>
  )
  }
export default Timeline;