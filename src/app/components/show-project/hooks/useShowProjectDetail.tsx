import deleteProject from "@/app/api/project/deleteProject";
import getProject from "@/app/api/project/getProject";
import { useProjectState } from "@/app/hooks/jotai/useProjectState";

import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const useShowProjectDetail = () => {
  const { id } = useParams();
  const { project, setProject } = useProjectState();
  const [error, setError] = useState<Error | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!id || isNaN(Number(id))) return;

    const fetchProject = async (id: number) => {
      try {
        const res = await getProject(id);
        setProject(res);
      } catch (err) {
        setError(err as Error);
        console.error(err);
      }
    };

    fetchProject(Number(id));
  }, [id, setProject]);

  const handleClick = useCallback(async () => {
    const isConfirmed = window.confirm("本当に削除してもよろしいですか？");

    if (!isConfirmed) return; // キャンセルした場合は処理を中断

    try {
      const res = await deleteProject(Number(id));
      setProject(res);
      router.push("/dashboard/project-list/");
    } catch (err) {
      setError(err as Error);
    }
  }, [id, router, setProject]);

  return { project, error, handleClick };
};

export default useShowProjectDetail;
