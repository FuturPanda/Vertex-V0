// app/auth-form.tsx
"use client";
import { Auth } from "@supabase/auth-ui-react";
import styled from "styled-components";

import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "./database.types";

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>();

  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      appearance={{
        theme: ThemeSupa,
        // If you want to extend the default styles instead of overriding it, set this to true
        extend: true,
        // Your custom classes
        className: {
          anchor: "my-awesome-anchor",
          button: "my-awesome-button",
          container: "supa-container",
          //..
        },
      }}
      // theme="dark"
      // showLinks={false}
      // providers={["google"]}
      // redirectTo="http://localhost:3000/auth/callback"
    />
  );
}
