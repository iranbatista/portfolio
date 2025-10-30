import { Background } from "./components/Background";
import avatarImage from "./assets/avatar.png";
import { Button } from "./components/Button";
import { AiFillGithub, AiFillLinkedin, AiOutlineLink } from "react-icons/ai"

export function App() {
  return (
    <>
      <Background />
      <div className="h-screen w-full max-w-7xl mx-auto grid grid-cols-2 px-5 py-24">
        <div className="flex flex-col">
          <img
            src={avatarImage}
            alt="Avatar"
            className="w-32 h-32 rounded-xl mb-5 avatar-shadow"
          />
          <h1 className="text-zinc-100 text-5xl mb-2">
            Hi, I'm{" "}
            <span className="blue-text font-extrabold">Iran Batista</span>
          </h1>
          <h2 className="text-zinc-100 text-xl font-medium mb-4">
            Full Stack Software Engineer
          </h2>

          <p className="text-zinc-400 mb-8">
            TypeScript specialist delivering impactful
            <br />
            software for global markets.
          </p>

          <div className="flex gap-2">
            <Button>
              View Resume
              <AiOutlineLink size={20} />
            </Button>
            <Button className="px-2.5">
              <AiFillGithub size={20} />
            </Button>
            <Button className="px-2.5">
              <AiFillLinkedin size={20} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
