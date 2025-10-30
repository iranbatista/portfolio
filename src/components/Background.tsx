export function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-background-base" aria-hidden="true">
      <div className="absolute inset-0 bg-[url(./assets/repeated-square-dark.webp)] bg-repeat opacity-50 mix-blend-screen will-change-transform" />
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-background-dark to-transparent" />
    </div>
  );
}
