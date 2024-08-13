const data = {
  name: "Foo",
  age: 123,
  email: "email@email.com",
};

export default function Data() {
  return (
    <div className="data">
      {Object.entries(data).map(([key, value], index) => {
        return (
          <div className="data-field" key={index}>
            <div className="data-key">{key}</div>
            <div className="data-value">{value}</div>
          </div>
        );
      })}
    </div>
  );
}
