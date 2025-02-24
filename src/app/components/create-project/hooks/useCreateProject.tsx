"use client";
import postProject from "@/app/api/project/postProject";
import { useCategoriesState } from "@/app/hooks/jotai/useCategoriesState";
import { useSelectedCategoryState } from "@/app/hooks/jotai/useSelectedCategory";
import { useCurrentUserState } from "@/app/hooks/jotai/useCurrentUserState";
import { useCallback, useState } from "react";
import { useProjectsState } from "@/app/hooks/jotai/useProjectsState";

const useCreateProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState<File | undefined>(undefined);
  const [email, setEmail] = useState("");
  const { currentUser } = useCurrentUserState();
  const { categories, pushCategories } = useCategoriesState();
  const { pushProjects } = useProjectsState();
  const { selectedCategories, setSelectedCategories } =
    useSelectedCategoryState();
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    undefined
  );

  // 新しいカテゴリーが追加されたときの処理
  const handleNewCategory = useCallback(
    (newCategory: string) => {
      if (!categories.includes(newCategory)) {
        pushCategories(newCategory);
      }
    },
    [categories, pushCategories]
  );

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    []
  );

  const handleDescriptionChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(e.target.value);
    },
    []
  );

  const handleUrlChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUrl(e.target.value);
    },
    []
  );

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setImage(file);
        const objectUrl = URL.createObjectURL(file);
        setPreviewImage(objectUrl);
      }
    },
    []
  );

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  const handleSubmit = useCallback(async () => {
    if (!currentUser) {
      return;
    }

    const formData = new FormData();

    // 画像が選択されている場合、FormData に追加
    if (image) {
      formData.append("project[image]", image); // "project[image]" として送信
    }

    // その他のデータを FormData に追加
    formData.append("project[title]", title);
    formData.append("project[description]", description);
    formData.append("project[portfolio_url]", url);
    formData.append("project[user_id]", currentUser.id.toString());

    // タグを配列形式で追加 (keyを "project[tag][]" に修正)
    selectedCategories.forEach((tag) => {
      formData.append("project[tag][]", tag);
    });
    try {
      // FormData をそのまま送信
      const res = await postProject(formData);
      pushProjects([res]);

      // フォームのリセット
      setTitle("");
      setDescription("");
      setUrl("");
      setImage(undefined);
      setEmail("");
      setSelectedCategories([]);
      setPreviewImage(undefined);
    } catch (error) {
      console.error("Upload Error:", error);
    }
  }, [
    currentUser,
    title,
    description,
    selectedCategories,
    url,
    image,
    pushProjects,
    setSelectedCategories,
  ]);

  return {
    handleSubmit,
    categories,
    selectedCategories,
    handleNewCategory,
    setSelectedCategories,
    handleTitleChange,
    handleDescriptionChange,
    handleUrlChange,
    handleImageChange,
    title,
    description,
    url,
    email,
    handleEmailChange,
    previewImage,
  };
};

export default useCreateProject;
