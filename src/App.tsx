import { useCallback, useMemo } from "react";
import worker, { IWorkerRequest } from "./worker/script";
import { createWebWorker } from "./worker/webWorker";
import { useWebWorker } from "./worker/useWebWorker";
import UsersList from "./components/UsersList";
import { getFakeUsers, IUser } from "./data/users";
import { SortType } from "./worker/constants";
import UsersListActions from "./components/UsersListActions";
import Counter from "./components/Counter";

const fakeUsers = getFakeUsers();

export const App = () => {
  const workerInstance = useMemo(() => createWebWorker(worker), []);

  const {
    running,
    error,
    result = fakeUsers,
    startProcessing,
  } = useWebWorker<IUser[], IWorkerRequest>(workerInstance);

  const handleSortAsc = useCallback(() => {
    startProcessing({ users: fakeUsers, type: SortType.asc });
  }, [startProcessing]);

  const handleSortDesc = useCallback(() => {
    startProcessing({ users: fakeUsers, type: SortType.desc });
  }, [startProcessing]);

  return (
    <div>
      <Counter />
      <h1>Users</h1>
      <pre>
        {JSON.stringify({
          running,
          error,
        })}
      </pre>

      {/* Just pure component for 2 buttons */}
      <UsersListActions
        onSortAscClick={handleSortAsc}
        onSortDescClick={handleSortDesc}
        loading={running}
      />

      {/* Pure component for displaying users list */}
      <UsersList data={result} loading={running} error={error} />
    </div>
  );
};
