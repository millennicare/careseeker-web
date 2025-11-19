import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { signInFn } from "../-api/sign-in";

export default function SignInForm() {
  const navigate = useNavigate();
  const {} = useMutation({
    mutationFn: useServerFn(signInFn),
  });

  const form = useForm({});

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-x-3 gap-y-4 px-2 py-5 md:px-5">
      <img
        src="/millennicare_logo_with_text.svg"
        alt="MillenniCare logo"
        className="w-2/3"
      />
    </div>
  );
}
