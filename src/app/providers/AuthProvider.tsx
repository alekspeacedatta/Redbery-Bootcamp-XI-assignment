import { useMe, useUserStore } from "@/entities/session";
import { PageLoader } from "@/shared/ui";
import type { ReactNode } from "react";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const user = useUserStore((state) => state.user);
  const { isLoading, isError } = useMe();

  if (isLoading && !user) return <PageLoader />;
  if (isError && !user) return null;

  return children;
};
