import React, { useState, useEffect } from "react";
import { Tabs, Modal } from "antd";
import { deleteApi, getApi } from "../../Api/apiCalls";
import MessageToast from "../../Utils/MessageToast";
import AddUser from "./AddUser";
import UserList from "./UserList";
import UpdateUser from "./UpdateUser";

function Home() {
  const [isAddUserModal, setIsAddUserModal] = useState(false);
  const [isUpdateUserModal, setIsUpdateUserModal] = useState(false);
  const [isDeleteUserModal, setIsDeleteUserModal] = useState(false);
  const [toast, setToast] = useState({});

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  const getUsers = async () => {
    const userList = await getApi("users");

    if (userList) {
      setUsers(userList);
    } else {
      setUsers([]);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async () => {
    await deleteApi(`users/${selectedUser.id}`).then(() => {
      setToast({
        type: "success",
        title: "User deleted",
        message: "User is deleted successfully",
      });
      setIsDeleteUserModal(false);
      getUsers();
    });
  };

  const Tab1 = () => <UserList {...{ users, setSelectedUser, selectedUser }} />;

  const items = [
    {
      key: "1",
      label: `Existing Users`,
      children: Tab1(),
    },
    {
      key: "2",
      label: `Existing Roles`,
      children: `Existing Roles`,
    },
    {
      key: "3",
      label: `User Activities`,
      children: `User Activities`,
    },
  ];

  return (
    <div className="px-8 bg-slate-200 py-5">
      <MessageToast {...{ toast }} />

      <div className="card bg-white">
        <div className="flex max-[768px]:flex-column lg:justify-between">
          <div>
            <h1 className="pt-1 text-2xl font-semibold">Users</h1>
          </div>
          <div>
            <button
              onClick={() => setIsAddUserModal(true)}
              className="btn-main max-[768px]:m-2  max-[768px]:block"
            >
              Add New
            </button>
            <button
              disabled={!(selectedUser?.id || false)}
              onClick={() => setIsUpdateUserModal(true)}
              className="btn-success-outline max-[768px]:m-2  max-[768px]:block"
            >
              Update
            </button>
            <button
              onClick={() => setIsDeleteUserModal(true)}
              disabled={!(selectedUser?.id || false)}
              className="btn-danger-outline max-[768px]:m-2  max-[768px]:block"
            >
              Delete User
            </button>
          </div>
        </div>
      </div>
      <div className="card mt-6 bg-white">
        <Tabs size="large" defaultActiveKey="1" items={items} />
      </div>
      <Modal
        title="Add User"
        open={isAddUserModal}
        onCancel={() => setIsAddUserModal(false)}
        footer={null}
        destroyOnClose
      >
        <AddUser {...{ setIsAddUserModal, setToast, getUsers }} />
      </Modal>

      <Modal
        title="Update User"
        open={isUpdateUserModal}
        onCancel={() => setIsUpdateUserModal(false)}
        footer={null}
        destroyOnClose
      >
        <UpdateUser
          {...{
            setIsUpdateUserModal,
            setToast,
            getUsers,
            user: selectedUser,
          }}
        />
      </Modal>

      <Modal
        title="Delete User"
        open={isDeleteUserModal}
        onCancel={() => setIsDeleteUserModal(false)}
        onOk={() => deleteUser()}
        okType="danger"
        destroyOnClose
      >
        <p>
          Are you sure you want to delete{" "}
          <strong>{selectedUser.userName}</strong> ?
        </p>
      </Modal>
    </div>
  );
}

export default Home;
