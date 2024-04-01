import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function GoogleAuth() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    const message = { type: "OAuthSuccess", code: code };
    // localhost는 추후 변경해야함
    window.opener.postMessage(message, import.meta.env.VITE_APP_URL);
    window.close();
  });

  return null;
}
