import { Background } from "./components/Background";
import avatarImage from "./assets/avatar.png";
import { AiFillGithub, AiFillLinkedin, AiOutlineLink } from "react-icons/ai";
import { Link } from "./components/Link";
import { LanguageToggle } from "./components/LanguageToggle";
import { Trans, useTranslation } from "react-i18next";
import { CursorGlow } from "./components/CursorGlow";

export function App() {
  const { t } = useTranslation();

  return (
    <>
      <Background />
      <CursorGlow />
      <div className="w-full max-w-7xl mx-auto px-5 flex justify-end pt-2">
        <LanguageToggle />
      </div>
      <div className="w-full max-w-7xl mx-auto px-5 py-16">
        <div className="flex flex-col">
          <img
            src={avatarImage}
            alt="Avatar"
            className="w-32 h-32 rounded-xl mb-5 avatar-shadow"
          />
          <h1 className="text-zinc-100 text-5xl mb-2">
            {t("greetings")}{" "}
            <span className="blue-text font-extrabold">Iran Batista</span>
          </h1>
          <h2 className="text-zinc-100 text-xl font-medium mb-4">
            {t("title")}
          </h2>

          <p className="text-zinc-400 mb-8 text-sm leading-normal">
            <Trans i18nKey="tagline" />
          </p>

          <div className="flex gap-2">
            <Link
              href="/Resume - Iran Batista.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("resumeCTA")}
              <AiOutlineLink size={20} />
            </Link>
            <Link
              href="https://github.com/iranbatista"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5"
            >
              <AiFillGithub size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/iranbatista"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5"
            >
              <AiFillLinkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
