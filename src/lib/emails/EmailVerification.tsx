import { Html, Section, Tailwind } from '@react-email/components';
import * as React from 'react';
import config from '../../../tailwind.config';

type EmailVerificationProps = {
  verificationLink?: string;
};

export default function EmailVerification({
  verificationLink,
}: EmailVerificationProps) {
  return (
    <Tailwind config={config}>
      <Html className="font-sans">
        <Section className="w-full max-w-lg rounded-xl border border-solid border-zinc-300 p-8">
          <div className="text-left text-zinc-600 text-base">
            <img
              src="https://nexton-cdn.github.io/assets/logo.png"
              alt="Logo"
              className="h-10 w-auto"
            />

            <h2 className="text-2xl mt-10 font-bold text-zinc-800">
              Verify your email address
            </h2>

            <p className="my-2">
              This is a verification email to confirm that you own this email
              address and to activate your account.
            </p>

            <p className="my-2">
              Please click the button below to verify your email address.
            </p>

            <a
              className="block my-8 px-6 py-3 rounded-lg bg-[#0EA5E9] text-white font-semibold max-w-max no-underline"
              href={verificationLink}
            >
              Verify my email address
            </a>

            <p className="text-sm my-2">
              If you're having trouble clicking the "Verify my email address"
              button, copy and paste the URL below into your web browser:
            </p>

            <a
              href={verificationLink}
              className="text-xs underline text-[#0EA5E9]"
            >
              {verificationLink}
            </a>
          </div>
        </Section>
      </Html>
    </Tailwind>
  );
}
