import LogoIcons from "../Helpers/Logos";
function Title() {
  return (
    <div class="relative flex items-center justify-center h-screen">
    <div class="text-center">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Hi, I'm <mark class="px-2 text-white bg-indigo-500 rounded dark:bg-indigo-400"> Anvilly</mark> Huang </h1>
        <div class="p-5"><p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">A graduate SWE. Ice cream enthusiast.</p></div>
        <LogoIcons/> 
    </div>
    </div>
  )
  }
export default Title;