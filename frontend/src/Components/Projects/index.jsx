import MyComponent from "../Helpers/card/index";
function Projects() {
  return (
    <div className="w-full justyify-around flex flex-wrap gap-y-10 justify-around">
    <div className="w-full flex p-10 space-x-5 justify-around">
      <MyComponent title="My Title" description="Hi there"/>
      <MyComponent title="My Title" description="hahahahah"/>
    </div>
    <div className="w-full flex p-10 space-x-5 justify-around">
      <MyComponent title="My Title" description="Hi there"/>
      <MyComponent title="My Title" description="hahahahah"/>
    </div>
    </div>
  )
  }
export default Projects;