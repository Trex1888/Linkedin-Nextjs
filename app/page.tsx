import PostFeed from "@/components/PostFeed";
import PostForm from "@/components/PostForm";
import UserInformation from "@/components/UserInformation";
import Widget from "@/components/Widget";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-cols-8 mt-5 sm:px-5">
      <section className="hidden md:inline md:col-span-2">
        <UserInformation />
      </section>

      <section
        className="bg-red-200 col-span-full md:col-span-6 xl:col-span-4 
      xl:max-w-xl mx-auto w-full"
      >
        <PostForm />
        <PostFeed />
      </section>

      <section className="hidden xl:inline justify-center col-span-2">
        <Widget />
      </section>
    </div>
  );
}
