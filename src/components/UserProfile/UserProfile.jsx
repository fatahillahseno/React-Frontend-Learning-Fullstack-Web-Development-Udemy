import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
export default function UserProfile({
  firstname = "John",
  lastname = "Doe",
} = props) {
  return (
    <div className="flex flex-col w-full pt-8 items-center">
      <Avatar className="mb-4">
        <AvatarFallback className="text-2xl font-semibold">
          {firstname.slice(0, 1)}
          {lastname.slice(0, 1)}
        </AvatarFallback>
      </Avatar>

      <h4>
        Hello, {firstname} {lastname}
      </h4>
    </div>
  );
}
