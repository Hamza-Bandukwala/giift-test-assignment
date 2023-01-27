import React from "react";
import { Checkbox } from "antd";

function UserList({ users, setSelectedUser, selectedUser }) {
  return (
    <div className="relative overflow-x-auto">
      <table className=" mt-7 w-full">
        <tr>
          <th className="w-10 p-4"></th>
          <th className="font-medium p-4 text-lg text-left"> User Name</th>
          <th className="font-medium p-4 text-lg text-left"> Status</th>
          <th className="font-medium p-4 text-lg text-left"> Last Login</th>
          <th className="font-medium p-4 text-lg text-left"> Date Created</th>
        </tr>
        {users.map((user, i) => (
          <tr
            onClick={() => setSelectedUser(user)}
            key={user.id}
            className={`${i % 2 === 1 ? "bg-slate-200" : "bg-white"} ${
              user.id === selectedUser.id && "border-2 border-blue-600 rounded"
            }`}
          >
            <td className="p-4">
              <Checkbox checked={user.id === selectedUser.id}></Checkbox>
            </td>
            <td className="p-4">{user.userName}</td>
            <td className="p-4">{user.status ? "ACTIVE" : "INACTIVE"}</td>
            <td className="p-4">{user.lastUpdatedAt}</td>
            <td className="p-4">{user.createdAt}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default UserList;
