import React from "react";
import Skeleton from "./Skeleton";

export default function TableSkeleton() {
  return (
    <tr>
      <td>
        <Skeleton height="4rem" width="70%" />
      </td>
      <td>
        <Skeleton width="50%" />
      </td>
      <td>
        <Skeleton width="50%" />
      </td>
      <td>
        <Skeleton width="50%" />
      </td>
      <td>
        <Skeleton width="50%" />
      </td>
    </tr>
  );
}
