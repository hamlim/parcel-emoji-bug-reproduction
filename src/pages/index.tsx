"use server-entry";

import Root from "./_root";

export default async function Home() {
  return (
    <Root>
      <div className="flex flex-col items-center justify-center h-screen max-w-2xl mx-auto">
        <div className="flex flex-col gap-4">
          <h2>Parcel Emoji Bug Reproduction</h2>
          <p>
            This is a minimal RSC app with Parcel, where it seems like Emoji are
            not handled correctly while server rendering?
          </p>
          <p>Here are some emoji:</p>
          <p>👋 (waving hand)</p>
          <p>👍 (thumbs up)</p>
          <p>👎 (thumbs down)</p>
          <p>👌 (ok hand)</p>
          <p>👈 (backhand index pointing left)</p>
          <p>👉 (backhand index pointing right)</p>
          <p>👆 (backhand index pointing up)</p>
          <p>👇 (backhand index pointing down)</p>
          <p>👊 (oncoming fist)</p>
        </div>
      </div>
    </Root>
  );
}
