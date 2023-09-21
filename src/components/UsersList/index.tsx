import { IUser } from "../../data/users";

export interface IUsersListProps {
  data: IUser[];
  loading: boolean;
  error: any;
}

export const UsersList: React.FC<IUsersListProps> = ({
  data,
  loading,
  error,
}) => {
  if (error) {
    return <p>{error}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {data.map((item) => (
        <p style={{ marginBottom: 12 }} key={item.id}>
          {`id: ${item.id} --- comments: ${item.commentCount} --- email: ${item.email}`}
        </p>
      ))}
    </>
  );
};

export default UsersList;
