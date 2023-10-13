function App() {
  return (
    <div>
      <ProfileCard
        age={30}
        firstName="John"
        lastName="Doe"
        hobby="read books"
      />

      <ProfileCard
        age={25}
        firstName="Jane"
        lastName="Smith"
        hobby="play guitars"
      />

      <ProfileCard
        age={28}
        firstName="Alice"
        lastName="Johnson"
        hobby="paint landscapes"
      />
    </div>
  );
}

interface ProfileProps {
  age: number;
  firstName: string;
  lastName: string;
  hobby: string;
}

function ProfileCard(props: ProfileProps) {
  return (
    <div className="card">
      <p>
        <span>Name:</span> {props.firstName}, {props.lastName}
      </p>
      <p>
        <span>Age:</span> {props.age}
      </p>
      <p>
        <span>Hobbies:</span> {props.hobby}
      </p>
    </div>
  );
}

export default App;
