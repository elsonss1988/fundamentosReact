import { UserRateType } from "../types/UserRateType";

type Props = {
  userRates: UserRateType[];
};

export function TabelaUserRate(userRates: Props) {
  userRates.userRates.length;
  return (
    <div className="container mx-auto">
      <table className="w-full border border-gray-600 rounded-,">
        <thead>
          <tr className="text-left border-b border-gray-600 bg-gray-800">
            <th className="p-3">Avatar</th>
            <th className="p-3">Name</th>
            <th className="p-3">Age</th>
            <th className="p-3">Email</th>
            <th className="p-3">PlaceId</th>
            <th className="p-3">Rate</th>
            <th className="p-3">Comments</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
