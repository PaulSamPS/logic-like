"use client";

import { createContext, useContext, Context } from "react";

export function createStrictContext<T>() {
  return createContext<T | null>(null);
}

export function useStrictContext<T>(context: Context<T | null>) {
  const value = useContext(context);
  if (value === null) throw new Error("Strict context not passed");
  return value as T;
}
