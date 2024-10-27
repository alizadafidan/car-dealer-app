export default function VehicleList({ models }) {
  // there were identical 4 ids, that's why i used index as key
  return (
    <ul style={{ listStyle: "none" }} className="list-disc">
      {models.map((model, idx) => (
        <li
          style={{
            width: "fit-content",
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
          }}
          key={idx}
        >
          {model.Make_Name} - {model.Model_Name}
        </li>
      ))}
    </ul>
  );
}
