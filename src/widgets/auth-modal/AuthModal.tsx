import { useAuthStore } from "@/entities/session";
import { Button, ModalCard } from "@/shared/ui";
import { lazy, Suspense } from "react";

const LoginForm = lazy(() =>
  import("@/features/login").then((module) => ({ default: module.LoginForm })),
);
const RegisterForm = lazy(() =>
  import("@/features/register").then((module) => ({
    default: module.RegisterForm,
  })),
);

export const AuthModal = () => {
  const isModalOpen = useAuthStore((state) => state.isModalOpen);
  const authMode = useAuthStore((state) => state.authMode);
  const setAuthMode = useAuthStore((state) => state.setAuthMode);
  const closeModal = useAuthStore((state) => state.closeModal);

  const switchAuthMode = () => {
    if (authMode === "login") {
      setAuthMode("register");
    } else {
      setAuthMode("login");
    }
  };

  if (!isModalOpen) return null;

  return (
    <ModalCard onClose={closeModal}>
      <div className="flex flex-col gap-4 p-11.25">
        {/* Header, Forms */}
        <div className="flex flex-col gap-6 items-center">
          {/* login, Register Header */}
          <div className="flex flex-col items-center gap-1.5">
            <h3 className="text-[32px] font-semibold leading-none">
              {authMode === "login" ? "Welcome Back" : "Create Account"}
            </h3>
            <p className="text-sm text-[#666666] font-medium leading-none">
              {authMode === "login"
                ? "Log in to continue your learning"
                : "Join and start learning today"}
            </p>
          </div>
          {/* Forms (Reg or Login) */}
          <Suspense
            fallback={
              <div className="py-10 text-center text-gray-400">
                Loading form...
              </div>
            }
          >
            {authMode === "login" ? (
              //Login Form
              <LoginForm />
            ) : (
              //Reg Form
              <RegisterForm />
            )}
          </Suspense>
        </div>
        {/* Log or Reg */}
        <div className="flex flex-col gap-2 mx-auto w-[93%]">
          <fieldset className="border-t border-[#D1D1D1] text-center ">
            <legend className="px-1.5 text-[#8A8A8A] text-sm font-medium mx-auto leading-none">
              or
            </legend>
          </fieldset>
          <div className="flex justify-center gap-2 items-center">
            <p className="text-xs text-[#666666] leading-none">
              {authMode === "login"
                ? "Do&apos;t have an account?"
                : "Already have an account?"}
            </p>
            <Button
              onClick={switchAuthMode}
              variant="link"
              className="text-sm "
            >
              {authMode === "login" ? "Sign Up" : "Log In"}
            </Button>
          </div>
        </div>
      </div>
    </ModalCard>
  );
};
