import Card from "../Helpers/card/index";
function Projects() {
  return (
    <div className="relative w-full justyify-around flex flex-wrap gap-y-10 justify-around">
    <div className="w-full flex p-10 space-x-5 justify-around">
      <Card title="To-do List" description="Gamify daily tasks to boost productivity using Golang." link="https://github.com/zhua633/go-to-do-list"/>
      <Card title="OpenAI Atari Games" description="Used TensorFlow to train OpenAI classic control and Atari games with machine learning models. Optimised the scoring and used AI to teach computer to play games!" link="https://github.com/zhua633/COMPSYS726-Reinforcement-Learning" />
    </div>
    <div className="w-full flex p-10 space-x-5 justify-around">
      <Card title="Old Personal Website" description="Old legacy personal website developed using basic CSS and React concepts." link="https://zhua633.github.io/my-website/"/>
      <Card title="Tic Tac Toe" description="Used alpha beta pruning to teach the computer to play a game of Tic Tac Toe. Be careful because the computer almost always win!" link="https://github.com/zhua633/Tic-Tac-Toe" />
    </div>
    </div>
  )
  }
export default Projects;