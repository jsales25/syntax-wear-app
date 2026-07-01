import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { useNavigate } from "@tanstack/react-router";
import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";

export const GoogleAuthButton = () => {
  const [googleError, setGoogleError] = useState<string | null>(null);
  const [,setIsLoadingGoogle] = useState<boolean>(false);

  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSuccess = async (
    credentialResponse: CredentialResponse
  ): Promise<void> => {
    const credential = credentialResponse.credential;
    console.log("Google Token:", credential);

    if (!credential) {
      setGoogleError("Credencial do Google não encontrada. Tente novamente.");
      setIsLoadingGoogle(false);
      return;
    }

    setIsLoadingGoogle(true);
    setGoogleError(null);

    try {
      await signInWithGoogle(credential);
      navigate({ to: "/" });
    } catch (error) {
      let errorMessage = "Erro ao fazer login com Google. Tente novamente.";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      setGoogleError(errorMessage);
    } finally {
      setIsLoadingGoogle(false);
    }
  };

  const handleGoogleError = (): void => {
    setGoogleError("Erro ao autenticar com o Google. Tente novamente.");
    setIsLoadingGoogle(false);
  };

  return (
    <>
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError}
      />

      {googleError && (
        <p className="mt-3.5 text-red-600 text-center">{googleError}</p>
      )}
    </>
  );
};
