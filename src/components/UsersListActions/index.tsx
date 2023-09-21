export interface IUsersListActionsProps {
  onSortAscClick: () => any;
  onSortDescClick: () => any;
  loading?: boolean;
}

export const UsersListActions: React.FC<IUsersListActionsProps> = ({
  onSortAscClick,
  onSortDescClick,
  loading,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 24,
        marginBottom: 24,
      }}
    >
      <button
        style={{ marginRight: 8 }}
        onClick={onSortAscClick}
        disabled={loading}
      >
        Asc
      </button>
      <button onClick={onSortDescClick} disabled={loading}>
        Desc
      </button>
    </div>
  );
};

export default UsersListActions;
