import staticData from '../../static.json';

const { users } = staticData;

export default function UserPicker() {
  return (
    <select>
      {users.map((u) => (
        <option key={u.id}>{u.name}</option>
      ))}
    </select>
  );
}
