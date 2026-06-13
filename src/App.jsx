import UserProfile from "./components/UserProfile/UserProfile";

const user = {
  firstName: "John",
  lastName: "Doe",
  skills: "React, Javascript",
};

const user2 = {
  firstName: "Mark",
  lastName: "Doe",
  skills: "NestJS, Typescript",
};

function App() {
  return (
    <>
      <UserProfile firstName={user.firstName} lastName={user.lastName} />
      <UserProfile
        firstName={user2.firstName}
        lastName={user2.lastName}
        skills={user2.skills}
      />
      <h1>Hello World</h1>
    </>
  );
}

export default App;
