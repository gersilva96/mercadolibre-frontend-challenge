const getEnvOrError = (varName: string): void => {
  throw new Error(`Environment variable ${varName} is not defined.`);
};

export const CONFIG = {
  ABSOLUTE_URL:
    process.env.NEXT_PUBLIC_ABSOLUTE_URL ||
    getEnvOrError("NEXT_PUBLIC_ABSOLUTE_URL"),
  SERVICES: {
    MELI: {
      URL:
        process.env.NEXT_PUBLIC_MELI_API_URL ||
        getEnvOrError("NEXT_PUBLIC_MELI_API_URL")
    }
  }
};
