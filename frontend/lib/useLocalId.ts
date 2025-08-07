import { useId } from "react";

export const useLocalId = (scope: string) => {
  const id = useId();
  return `csbs-${scope}-${id}`;
};
